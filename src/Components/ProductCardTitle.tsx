import React from "react";
import { useContext } from "react";
import { ProductCardContext } from "./Context";
import { ProductCardTextProps } from "../interfaces";

export const ProductCardTitle = ({
  title,
  className,
  style,
}: ProductCardTextProps): JSX.Element => {
  const { product } = useContext(ProductCardContext);

  return (
    <span
      className={`${className} `}
      style={style}
    >
      {title ? title : product.title}
    </span>
  );
};
