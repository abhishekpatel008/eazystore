import React from 'react';
import ProductCard from './ProductCard';

export default function ProductListings({ productList }) {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {productList && productList.length > 0 ? (
          productList.map((item) => (
            <ProductCard key={item.id} item={item} />
          )
          )
        ) : (
          <p className="product-listings-empty">No harvest items found matching your search.</p>
        )}
      </div>
    </div>
  );
}
