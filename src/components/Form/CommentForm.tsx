import { useState, useEffect } from 'react';
import Label from './Label';
import NameInput from './NameInput';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';
import FormTitle from './FormTitle';
import CharacterCounter from './CharacterCounter';
import type { CommentFormProps } from '../../types/CommentFormProps';
import { useCommentForm } from '../../hooks/useCommentForm';

function CommentForm({ onCommentPosted }: CommentFormProps) {
  const {
    name,
    setName,
    content,
    setContent,
    statusMessage,
    handleSubmit
  } = useCommentForm(onCommentPosted);

  const [showFormMobile, setShowFormMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setShowFormMobile(false); // Garante que o modal some no desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleForm = () => {
    setShowFormMobile((prev) => !prev);
  };

  const isFormVisible = isDesktop || showFormMobile;

  return (
    <div className="w-full h-full flex items-center justify-center px-4">

      {!isDesktop && !showFormMobile && (
        <button
          onClick={handleToggleForm}
          className="fixed bottom-6 right-6 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
        >
          Novo Comentário
        </button>
      )}

      {isFormVisible && (
        <div
          className={`${
            isDesktop
              ? 'static w-2/3 max-w-3xl'
              : 'fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm'
          }`}
        >
          <div
            className={`relative transform transition-all duration-300 ${
              showFormMobile || isDesktop
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >

            {!isDesktop && (
              <button
                onClick={handleToggleForm}
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-600"
                aria-label="Fechar formulário"
              >
                ✕
              </button>
            )}

            <form
              onSubmit={handleSubmit}
              className="w-full md:w-full max-w-lg h-auto bg-white rounded-xl shadow-lg flex flex-col justify-center gap-4 p-6"
            >
              <FormTitle />

              <div className="flex flex-col">
                <Label htmlFor="name-input">Nome</Label>
                <NameInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="text-area">Comentário</Label>
                <TextArea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={150}
                />
                <div className="flex justify-center">
                <CharacterCounter
                  currentLength={content.length}
                  maxLength={150}
                />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                  <SubmitButton />
                </div>
                {statusMessage && (
                  <p
                    className={`text-sm text-center ${
                      statusMessage.type === 'success'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {statusMessage.text}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
