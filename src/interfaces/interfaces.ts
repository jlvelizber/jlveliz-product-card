import { CSSProperties } from "react";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductCardOnChangeArgs {
  product: Product;
  count: number;
}

export interface InitialProductCardProps {
  count?: number;
  maxCount?: number;
}

export interface ProductCardProps {
  style?: CSSProperties
  className?: string;
  children?: (args: ProductCardHandlersInterface) => JSX.Element;
  product: Product;
  value?: number;
  initialValue?: InitialProductCardProps
  onChange?: (args: ProductCardOnChangeArgs) => void
}


export interface useProductArgsInterface {
  product: Product;
  value?: number;
  initialValue?: InitialProductCardProps
  onChange?: (args: ProductCardOnChangeArgs) => void
}

export interface ProductCardImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties
  title?: string;
}
export interface ProductCardTextProps {
  className?: string,
  style?: CSSProperties
  title?: string;
}

export interface ProductCardButtonsProps {
  className?: string,
  style?: CSSProperties
}

export interface ProductCardContextInterface {
  count: number;
  maxCount?: number;
  product: Product;
  inscaseBy: (value: number) => void;
}


export interface ProductCardHOCProps {
  ({ children, product, style }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductCardTextProps) => JSX.Element;
  Image: ({ img, title }: ProductCardImageProps) => JSX.Element;
  Buttons: ({ className }: ProductCardButtonsProps) => JSX.Element;
}


export interface ProductInCard extends Product {
  count: number;
}

export interface ProductCardHandlersInterface {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product
  increaseBy: (value: number) => void;
  reset: () => void;
}
