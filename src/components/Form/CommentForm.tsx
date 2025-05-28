import { useState } from 'react';
import { postComment } from '../../services/commentService';
import Label from './Label';
import NameInput from './NameInput';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';
import FormTitle from './FormTitle';
import CharacterCounter from './CharacterCounter';

function CommentForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (name.trim() === "") {
    setStatusMessage({ type: "error", text: "O campo nome deve ser preenchido." });
    return;
  }

  if (content.trim() === "") {
    setStatusMessage({ type: "error", text: "O campo comentário deve ser preenchido." });
    return;
  }

  try {
    await postComment({ name, content });
    setStatusMessage({ type: "success", text: "Comentário enviado com sucesso!" });
    setName("");
    setContent("");
  } catch (e) {
    setStatusMessage({ type: "error", text: "Erro ao enviar o comentário." });
    console.error(e);
  }
}

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 h-full bg-white rounded-xl shadow-lg flex flex-col justify-center gap-4"
      >
        <FormTitle />

        <div className='flex flex-col items-center'>
          <Label htmlFor="name-input">Nome</Label>
          <NameInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center">
          <Label htmlFor="text-area">Comentário</Label>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={150}
          />
        <CharacterCounter currentLength={content.length} maxLength={150} />
        </div>

        <div className="flex flex-col items-center gap-2">
          <SubmitButton />
          {statusMessage && (
            <p className={`text-sm ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {statusMessage.text}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default CommentForm;