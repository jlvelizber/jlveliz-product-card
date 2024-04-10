## Eejemplo

```
import {ProductCard,
ProductCardImage,
ProductCardTitle,
ProductCardButtons} from 'jlveliz-product-card'
```

<ProductCard
product={product}
key={product.id}
initialValue={{
          count: 5,
          maxCount: 10,
        }} >
{({ product }) => (
<>
<ProductCardImage />
<ProductCardTitle />
<ProductCardButtons />
</>
)}
</ProductCard>
