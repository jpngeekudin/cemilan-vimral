import { ICategory } from "./category.interface";

export interface IProduct {
  name: string;
  category: ICategory;
  url: string;
  location: string,
}
