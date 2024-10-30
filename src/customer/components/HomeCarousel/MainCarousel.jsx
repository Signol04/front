import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
      <img
          key={item.image} // Agrega una clave única para cada imagen
          className='cursor-pointer w-full h-64.001 object-cover' // Ajusta el tamaño aquí
          src={item.image}
          alt=''
      />
  ));

  return (
      <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
      />
  );
}


export default MainCarousel