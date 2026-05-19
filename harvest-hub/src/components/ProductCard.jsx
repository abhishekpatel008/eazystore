import React from 'react'

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={item.imageUrl}
          alt={item.title}
          className="product-card-image" />
      </div>
      <div className="product-card-details">
        <h2 className="product-card-title">{item.title}</h2>
        <p className="product-card-description">{item.description}</p>
        <div className="product-card-footer">
          <div className="product-card-price">
            $ {item.price}
          </div>
        </div>
      </div>
    </div>
  )
}
