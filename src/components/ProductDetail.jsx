import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetail({ products }) {
  const { id } = useParams()
  const product = products.find(p => String(p.id) === id)

  if (!product) return <div>Product not found. <Link to="/">Back</Link></div>

  return (
    <div className="detail">
      <Link to="/">← Back</Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price.toLocaleString()}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Subtotal:</strong> ${(product.price * product.quantity).toLocaleString()}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <h3>Description</h3>
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <p>{product.specs}</p>
    </div>
  )
}
