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

  // collins crunchy
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/4AZPb3mQr0",
    location: 'jakarta'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/7AD1ASvIgM",
    location: 'jakarta'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/6ztay4Ogio",
    location: 'tangerang'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/40FzOZvlwH",
    location: 'tangerang'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/Vg7E4t2pW",
    location: 'jawa tengah'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/5V4nBDbQbS",
    location: 'jawa tengah'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/AKA2w4FR6Z",
    location: 'jawa timur'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/20Uv0j3ZEV",
    location: 'jawa timur'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/8pLF9ErpK4",
    location: 'palembang'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/3L0IalHnFo",
    location: 'palembang'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/3L0IalHnFo",
    location: 'balikpapan'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/3pwZBvip2f",
    location: 'balikpapan'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/7UprYjBiYd",
    location: 'samarinda'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/9zXCX72z1L",
    location: 'makassar'
  },
  {
    name: "Coklat Collins Crunchy 350g",
    category: getCategory("collins"),
    url: "https://shope.ee/6paAlPPLDU",
    location: 'lampung'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/5V4nAuE6Bn",
    location: 'bali'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/9zXCXvDVzu",
    location: 'bengkulu'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/7KWRMypLV6",
    location: 'bogor'
  },
  {
    name: "Coklat Collins Crunchy 1kg",
    category: getCategory("collins"),
    url: "https://shope.ee/508WalIbyA",
    location: 'manado'
  },

  // herbal
  {
    name: "Nutrifarm Cuka Apel",
    category: getCategory("herbal"),
    url: "https://shope.ee/1qBUmxwLz8",
  },
  {
    name: "Makkata Cuka Apel 500ml",
    category: getCategory("herbal"),
    url: "https://shope.ee/5KlMxSlkE9",
  },
  {
    name: "Virgin Coconut Oil",
    category: getCategory("herbal"),
    url: "https://shope.ee/6AKTx3YQq3",
  },
  {
    name: "Minyak Zaitun",
    category: getCategory("herbal"),
    url: "https://shope.ee/qIxbKmJed",
  },
  {
    name: "Sari Lemon Alami",
    category: getCategory("herbal"),
    url: "https://shope.ee/9zXCWJaNbi",
  },
];
