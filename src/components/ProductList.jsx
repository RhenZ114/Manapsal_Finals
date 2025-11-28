import React, { useState } from 'react'
import ProductCard from './ProductCard'
import AddProductForm from './AddProductForm'

export default function ProductList({ products, updateQuantity, toggleCart, addProduct, cart }) {
  const [category, setCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  const filtered = category === 'All' ? products : products.filter(p => p.category === category)

  const overallTotal = products.reduce((sum, p) => sum + (Number(p.price) * Number(p.quantity || 0)), 0)

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <label>
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <hr />

        <div>
          <h3>Overall Total</h3>
          <p><strong>${overallTotal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</strong></p>
        </div>

        <hr />

        <h2>Add New Product</h2>
        <AddProductForm onAdd={addProduct} />
      </aside>

      <section className="product-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} updateQuantity={updateQuantity} toggleCart={toggleCart} inCart={cart.includes(p.id)} />
        ))}
      </section>
    </div>
  )
}
