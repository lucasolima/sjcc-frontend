import { useEffect, useState } from "react";
import { getAllComments } from "../services/commentService";
import type { CommentProps } from "../types/CommentaryProps";

export function useComments(refreshTrigger: boolean) {
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

  return { comments, loading };
}
