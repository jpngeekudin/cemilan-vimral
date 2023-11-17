import { ICategory } from "../interfaces/category.interface";
import { IProduct } from "../interfaces/product.interface";
import { categories } from "./category.config";

const getCategory = (name: string): ICategory => {
  return categories.find((c) => c.name === name)!;
};

export const products: IProduct[] = [
  {
    name: "Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/7zm00TzCOb",
    location: 'bandung',
  },
  {
    name: "Collins Choco Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/3Agaig7VJ7",
    location: 'bandung',
  },
  {
    name: "Collins Dip Glaze 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/1qBMfcxDgu",
    location: 'bandung'
  },
];
