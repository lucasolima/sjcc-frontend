import { useState } from 'react';
import { postComment } from '../services/commentService';

export function useCommentForm(onCommentPosted: () => void) {
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
      onCommentPosted();
    } catch (e) {
      setStatusMessage({ type: "error", text: "Erro ao enviar o comentário." });
      console.error(e);
    }
  }

  return {
    name,
    setName,
    content,
    setContent,
    statusMessage,
    handleSubmit
  };
}
