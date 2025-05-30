import Commentary from "../Commentaries/Commentary";
import type { CommentListProps } from "../../types/CommentListProps";
import { useComments } from "../../hooks/useComments";

function CommentList({ refreshTrigger }: CommentListProps) {
  const { comments, loading } = useComments(refreshTrigger);

  if (loading) return <p className="text-center text-gray-500">Carregando comentários...</p>;

  return (
    <div className="space-y-4">
      {comments
        .filter(comment => comment.status === "approved")
        .slice()
        .reverse()
        .map((comment) => (
          <Commentary 
            key={comment.createdAt}
            name={comment.name} 
            createdAt={new Date(comment.createdAt ?? "").toLocaleDateString("pt-br")} 
            content={comment.content} 
          />
      ))}
    </div>
  );
}

export default CommentList;
