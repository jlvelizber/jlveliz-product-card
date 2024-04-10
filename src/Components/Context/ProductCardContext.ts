import { createContext } from "react";
import { ProductCardContextInterface } from "../../interfaces";

export const ProductCardContext = createContext<ProductCardContextInterface>(
    {} as ProductCardContextInterface
  );
  