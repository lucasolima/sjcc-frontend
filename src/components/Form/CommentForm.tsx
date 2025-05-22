import { useState } from 'react';
import { postComment } from '../../services/commentService';
import Label from './Label';
import NameInput from './NameInput';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';
import FormTitle from './FormTitle';

function CommentForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    try{
      await postComment({name, content});
      alert("Comentário enviado com sucesso!");
      setName("");
      setContent("");
    } catch (e) {
      alert("Erro ao enviar o comentário.");
      console.log(e);
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
          />
        </div>

        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default CommentForm