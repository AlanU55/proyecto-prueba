import React from 'react';

export default function Card({ image, title, price, addToCart }) {
  return (
    <div className='Card text-center bg-dark'>
      <div className='Card-body text-light'>
        <img src={image} alt='imagen' className='card-image' />
        <h4 className='Card-title'>{title}</h4>
        <p className='Card-text-secondary'>
          Precio: {price}
        </p>
        <button onClick={() => addToCart({ title, price })} className='btn btn-outline-primary rounded'>
          Comprar
        </button>
      </div>
    </div>
  );
}
