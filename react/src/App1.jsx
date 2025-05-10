import React, { useState } from 'react';

// GroceryItem Component
function GroceryItem({ name, price, quantity }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
      <h4>{name}</h4>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

// GroceryList Component
function GroceryList() {
  const [search, setSearch] = useState('');

  const groceryItems = [
    { name: 'Rice', price: 50, quantity: '1kg' },
    { name: 'Sugar', price: 40, quantity: '1kg' },
    { name: 'Milk', price: 25, quantity: '1L' },
    { name: 'Eggs', price: 60, quantity: '12 pcs' }
  ];

  const filteredItems = groceryItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Grocery List</h2>
      <input
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.map((item, index) => (
        <GroceryItem key={index} {...item} />
      ))}
    </div>
  );
}

export default GroceryList;
