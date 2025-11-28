import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, updateQuantity, toggleCart, inCart }) {
  const subtotal = (product.price * product.quantity).toFixed(2)

  return (
    <div className={`card ${product.quantity < 5 ? 'low-stock' : ''}`}>
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p>Price: ${product.price.toLocaleString()}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Subtotal: ${subtotal}</p>
        {product.quantity < 5 && <p className="low">Low Stock</p>}

        <div className="controls">
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <button onClick={() => updateQuantity(product.id, +1)}>+</button>
          <button onClick={() => toggleCart(product.id)}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
          <Link to={`/product/${product.id}`} className="details">Details</Link>
        </div>
      </div>
    </div>
  )
}
