import React from "react";
import { useCallback, useContext } from "react";

import { ProductCardContext } from "./Context";
import styles from "./../styles/styles.module.css";
import { ProductCardButtonsProps } from "../interfaces";

export const ProductCardButtons = ({
  className,
  style,
}: ProductCardButtonsProps) => {
  const { inscaseBy, count, maxCount } = useContext(ProductCardContext);

  const isMaxReached = useCallback(
    () => !!maxCount && count === maxCount,
    [maxCount, count]
  );
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => inscaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button
        className={`${styles.buttonAdd}  ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => inscaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
