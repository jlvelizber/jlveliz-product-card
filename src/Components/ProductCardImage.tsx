import React from "react";
import { useContext } from "react";
import { ProductCardImageProps } from "../interfaces";
import { ProductCardContext } from "./Context";
import styles from "./../styles/styles.module.css";
import noImage from "./../assets/no-image.jpg";

export const ProductCardImage = ({
  img = "",
  title,
  className,
  style,
}: ProductCardImageProps) => {
  const { product } = useContext(ProductCardContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      src={imgToShow}
      alt={title || product.title}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
