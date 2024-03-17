import { CategoryModel } from "./CategoryModel";

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: CategoryModel[];
    relatedProducts: string;
    feature: boolean;
    image: string;
}