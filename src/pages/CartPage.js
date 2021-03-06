import React from 'react'
import './CartPage.css'
import Item from '../components/Item'

function CartPage({ items, onAddOne, onRemoveOne }) {
  return items.length > 0 ? (
    <ul className="CartPage-items">
      {items.map(item => (
        <li key={item.key} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                onClick={() => onRemoveOne(item)}
                className="CartItem-removeOne"
              >
                &ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                onClick={() => onAddOne(item)}
                className="CartItem-addOne"
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  ) : (
    <p>Your shopping cart is empty</p>
  )
}

export default CartPage
