import api from "./apiService";
import type { Comment } from "../types/CommentaryProps";

export const getAllComments = async (): Promise<Comment[]> => {
  const response = await api.get("/comments");
  return response.data;
};

export const sendComment = async (data: Comment): Promise<void> => {
  await api.post("/comments", data);
};

export async function postComment(comment: Omit<Comment, "id" | "createdAt" | "status">){
  const response = await api.post("/comments", comment);
  return response.data;
}