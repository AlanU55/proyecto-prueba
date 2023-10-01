import React from 'react';
import './Cart.css'; 

const CartItem = ({ title, price, quantity, onRemove }) => (
  <div className="cart-item">
    <div className="cart-item-details">
      <span className="cart-item-title">{title}</span>
      <span className="cart-item-price">${price.toFixed(2)}</span>
    </div>
    <div className="cart-item-quantity">
      <span className="cart-item-quantity-label">Cantidad:</span>
      <span className="cart-item-quantity-value">{quantity}</span>
    </div>
    <button className="cart-item-remove" onClick={onRemove}>
      Eliminar
    </button>
  </div>
);

export default function Cart({ cartItems, removeFromCart }) {
  // Función para calcular el precio total del carrito.
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compra</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeFromCart(index)}
          />
        ))}
      </div>
      <div className="cart-total">
        <span>Total: ${calculateTotalPrice()}</span>
      </div>
    </div>
  );
}
