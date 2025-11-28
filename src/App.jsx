import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

const initialProducts = [
  {
    id: 1,
    name: 'Rolls-Royce Phantom',
    category: 'Sedan',
    price: 450000,
    quantity: 3,
    image: '/images/car1.jpg',
    description: 'Ultimate luxury sedan with handcrafted interior.',
    specs: 'V12 engine, bespoke interior',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Bentley Continental GT',
    category: 'Coupe',
    price: 220000,
    quantity: 6,
    image: '/images/car2.jpg',
    description: 'Powerful grand tourer with refined craftsmanship.',
    specs: 'W12 engine, adaptive cruise',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Ferrari Portofino',
    category: 'Convertible',
    price: 210000,
    quantity: 2,
    image: '/images/car3.jpg',
    description: 'Elegant convertible sports car for spirited drives.',
    specs: 'V8 turbo, retractable hardtop',
    rating: 4.7
  }
]

export default function App() {
  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([])

  const updateQuantity = (id, delta) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p))
  }

  const toggleCart = (id) => {
    setCart(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }])
  }

  return (
    <div className="app">
      <header>
        <Link to="/"><h1>Luxury Cars - Product Management</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList products={products} updateQuantity={updateQuantity} toggleCart={toggleCart} addProduct={addProduct} cart={cart} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </main>
    </div>
  )
}
