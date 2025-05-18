import api from "./apiService";
import type { Comment } from "../types/Comment";

export const getAllComments = async (): Promise<Comment[]> => {
  const response = await api.get("/comments");
  return response.data;
};

export const sendComment = async (data: Comment): Promise<void> => {
  await api.post("/comments", data);
};