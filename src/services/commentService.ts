import api from "./apiService";
import type { CommentProps } from "../types/CommentaryProps";

export const getAllComments = async (): Promise<CommentProps[]> => {
  const response = await api.get("/comments");
  return response.data;
};

export const sendComment = async (data: CommentProps): Promise<void> => {
  await api.post("/comments", data);
};

export async function postComment(comment: Omit<CommentProps, "id" | "createdAt" | "status">){
  const response = await api.post("/comments", comment);
  return response.data;
}