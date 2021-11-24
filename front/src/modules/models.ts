export interface Catergorie {
  name: string;
  id?: number;
  bgColor: string;
  textColor: string;
}

export interface Snippet {
  id?: number;
  name: string;
  description: string;
  createdAt: Date;
  fireBasePath: string;
  code?: string;
  backUpPath?: string;
  categorie: Catergorie[];
}
