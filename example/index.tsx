import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductCardTitle,
  ProductCardImage,
  ProductCardButtons,
} from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug- Card',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
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

ReactDOM.render(<App />, document.getElementById('root'));
