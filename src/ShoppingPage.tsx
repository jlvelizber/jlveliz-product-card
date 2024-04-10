import {
  ProductCard,
  ProductCardButtons,
  ProductCardImage,
  ProductCardTitle,
} from "../Components";
import { products } from "../data";

import "./../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  // const { products, onProductCountChange, shoppingCart } = useShoppingCart();
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <h2>Product Card</h2>

      <ProductCard
        product={product}
        key={product.id}
        initialValue={{
          count: 5,
          maxCount: 10,
        }}
      >
        {({ product }) => (
          <>
            <ProductCardImage />
            <ProductCardTitle />
            <ProductCardButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
