import { useEffect, useState } from "react";
import Commentary from "../Commentaries/Commentary";
import { getAllComments } from "../../services/commentService";
import type { Comment } from "../../types/Comment";

function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const data = await getAllComments();
        setComments(data);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Carregando comentários...</p>;

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Commentary name={comment.name} createdAt={new Date(comment.createdAt ?? "").toLocaleDateString("pt-br")} content={comment.status == "approved" ? comment.content : 'Comentário Removido'}/>
        
      ))}
    </div>
  );
}

export default CommentList;
