import { ICategory } from "../interfaces/category.interface";
import { IProduct } from "../interfaces/product.interface";
import { categories } from "./category.config";

const getCategory = (name: string): ICategory => {
  return categories.find((c) => c.name === name)!;
};

export const products: IProduct[] = [
  {
    name: "Selai Stroberi",
    category: getCategory("selai"),
    url: "https://tokopedia.com/",
  },
  {
    name: "Susu Kambing",
    category: getCategory("minuman"),
    url: "https://tokopedia.com/",
  },
  {
    name: "Coklat Batang",
    category: getCategory("permen"),
    url: "https://tokopedia.com/",
  },
  {
    name: "Sosis",
    category: getCategory("makanan"),
    url: "https://tokopedia.com/",
  },
  {
    name: "Telor Naga Rebus",
    category: getCategory("makanan"),
    url: "https://tokopedia.com/",
  },
];
