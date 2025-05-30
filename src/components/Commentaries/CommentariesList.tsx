import { useEffect, useState } from "react";
import Commentary from "../Commentaries/Commentary";
import { getAllComments } from "../../services/commentService";
import type { CommentProps } from "../../types/CommentaryProps";
import type { CommentListProps } from "../../types/CommentListProps";

function CommentList({refreshTrigger}:CommentListProps) {
  const [comments, setComments] = useState<CommentProps[]>([]);
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
  }, [refreshTrigger]);

  if (loading) return <p className="text-center text-gray-500">Carregando comentários...</p>;
  console.log(comments)
  return (
    <div className="space-y-4">
      {comments
        .filter(comment => comment.status === "approved")
        .slice()
        .reverse()
        .map((comment) => (
        <Commentary 
          name={comment.name} 
          createdAt={new Date(comment.createdAt ?? "").toLocaleDateString("pt-br")} 
          content={comment.content}/>
      ))}
    </div>
  );
}

export default CommentList;
