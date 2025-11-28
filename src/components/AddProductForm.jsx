import React, { useState } from 'react'

export default function AddProductForm({ onAdd }) {
  // Small placeholder so Requirement 2 will replace/extend this later — included here so the app runs.
  const [showNote] = useState(true)

  return (
    <div>
      <p className="form-note">Use the Add Product form (in later commit) to add items. You can still add sample images into <code>/public/images</code>.</p>
      {showNote && null}
    </div>
  )
}
