import React from "react";
import { useProduct } from "../hooks";
import { ProductCardProps } from "../interfaces";
import { ProductCardContext } from "./Context";
import styles from "./../styles/styles.module.css";

const { Provider } = ProductCardContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  initialValue,
  onChange,
}: ProductCardProps) => {
  const { count, inscaseBy, maxCount, reset } = useProduct({
    onChange,
    product,
    value,
    initialValue,
  });
  return (
    <Provider value={{ count, maxCount, inscaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children!({
          count,
          product,
          maxCount: initialValue?.maxCount,
          isMaxCountReached:
            !!initialValue?.maxCount && initialValue.maxCount == count,
          increaseBy: inscaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
