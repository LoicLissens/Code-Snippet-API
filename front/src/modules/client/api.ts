import { api } from "./config";
import { Catergorie, Snippet } from "../models";

export const fetchCategories = async (): Promise<Catergorie[]> => {
  const r = await api.get("/api/categories");
  return r.data;
};

export const postCategorie = async (categorie: Catergorie): Promise<any> => {
  const r = await api.post("/api/categorie", categorie);
  return r.data;
};

const postSnippets = async (snippet: Snippet): Promise<any> => {};
