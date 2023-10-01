import React from 'react';
import Card from './Card';

import image1 from "../assetes/Batman.jpg";
import image2 from "../assetes/El padrino II.jpg";
import image3 from "../assetes/El resplandor.jpg"; 
import image4 from "../assetes/El señor de los anillos.jpg";
import image5 from "../assetes/hereditary.jpg";
import image6 from "../assetes/LALALAND.jpg"; 
import image7 from "../assetes/NOP.jpg"; 
import image8 from "../assetes/Oppenhaimer.jpg"; 
import image9 from "../assetes/Suzume.jpg"; 

export default function Cards({ addToCart }) {

  const cardData = [
    { image: image1, title: 'Batman', price: '49.99' },
    { image: image2, title: 'El Padrino II', price: '39.99' },
    { image: image3, title: 'El Resplandor', price: '54.99' },
    { image: image4, title: 'El Señor de los Anillos', price: '59.99' },
    { image: image5, title: 'Hereditary', price: '29.99' },
    { image: image6, title: 'La La Land', price: '44.99' },
    { image: image7, title: 'NOP', price: '49.99' },
    { image: image8, title: 'Oppenheimer', price: '39.99' },
    { image: image9, title: 'Suzume', price: '19.99' },
  ];
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {cardData.map((data, index) => (
          <div className='col-md-4 mb-4' key={index}>
            <Card image={data.image} title={data.title} price={data.price} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}