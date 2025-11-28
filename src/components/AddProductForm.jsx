import React, { useState } from 'react'

export default function AddProductForm({ onAdd }) {
  const initial = {
    image: '/images/car1.jpg',
    name: '',
    category: '',
    description: '',
    specs: '',
    rating: '',
    price: '',
    quantity: ''
  }

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const err = {}
    if (!form.image) err.image = 'Image path is required'
    if (!form.name) err.name = 'Name is required'
    if (!form.category) err.category = 'Category is required'
    if (!form.description) err.description = 'Description is required'
    if (!form.specs) err.specs = 'Specifications are required'
    if (!form.rating || isNaN(Number(form.rating))) err.rating = 'Valid rating is required'
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) err.price = 'Valid price is required'
    if (!form.quantity || isNaN(Number(form.quantity)) || Number(form.quantity) < 0) err.quantity = 'Valid quantity is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    if (Object.keys(err).length) {
      setErrors(err)
      return
    }

    const product = {
      image: form.image,
      name: form.name,
      category: form.category,
      description: form.description,
      specs: form.specs,
      rating: Number(form.rating),
      price: Number(form.price),
      quantity: Number(form.quantity)
    }

    onAdd(product)
    setForm(initial)
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label>
        Image path:
        <input name="image" value={form.image} onChange={handleChange} placeholder="/images/car4.jpg" />
        {errors.image && <div className="error">{errors.image}</div>}
      </label>

      <label>
        Name:
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <div className="error">{errors.name}</div>}
      </label>

      <label>
        Category:
        <input name="category" value={form.category} onChange={handleChange} />
        {errors.category && <div className="error">{errors.category}</div>}
      </label>

      <label>
        Description:
        <textarea name="description" value={form.description} onChange={handleChange} />
        {errors.description && <div className="error">{errors.description}</div>}
      </label>

      <label>
        Specifications:
        <textarea name="specs" value={form.specs} onChange={handleChange} />
        {errors.specs && <div className="error">{errors.specs}</div>}
      </label>

      <label>
        Rating:
        <input name="rating" value={form.rating} onChange={handleChange} placeholder="4.5" />
        {errors.rating && <div className="error">{errors.rating}</div>}
      </label>

      <label>
        Price:
        <input name="price" value={form.price} onChange={handleChange} placeholder="e.g. 150000" />
        {errors.price && <div className="error">{errors.price}</div>}
      </label>

      <label>
        Quantity:
        <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 3" />
        {errors.quantity && <div className="error">{errors.quantity}</div>}
      </label>

      <button type="submit">Add Product</button>
      <p className="form-note">All fields are required. Provide image path relative to <code>/public/images</code>.</p>
    </form>
  )
}

