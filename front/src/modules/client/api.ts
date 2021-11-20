import { api } from "./config";
import { Catergorie } from "../models";
export const fetchCategories = async (): Promise<Catergorie[]> => {
  const r = await api.get("/api/categories");
  return r.data;
};
