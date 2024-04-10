import { ProductCardHOCProps } from "../interfaces";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardTitle } from "./ProductCardTitle";
import { ProductCardButtons } from "./ProductCardButtons";

export { ProductCardImage } from "./ProductCardImage";
export { ProductCardTitle } from "./ProductCardTitle";
export { ProductCardButtons } from "./ProductCardButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductCardTitle,
  Image: ProductCardImage,
  Buttons: ProductCardButtons,
});

export default ProductCard;
