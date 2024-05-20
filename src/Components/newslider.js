import React, { useEffect, useRef, useState } from 'react';
import './newSlider.css';
import Card from './card';

export default function NewSlider({data}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  console.log(data)
  

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      setScrollPosition(scrollContainer.scrollLeft);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
    <div className="text-center " style={{background:"#EBEEE8", fontSize:"40px", fontWeight:"700",textDecoration:"underline" ,marginTop:"2px" }} > New Products</div>
      <div
        ref={scrollContainerRef}
        id="main-scroll"
        style={{
          backgroundColor: '#EBEEE8',
          height: '400px',
          display: 'flex',
          gap: '10px',
          overflowX: 'hidden',
          paddingTop:"60px",
          paddingBottom:"60px",
          scrollLeft: scrollPosition,
        }}
      >
        {data.filter((product)=> product.new === true).map((product)=><Card image={product.image} title={product.title} price={product.price} />)}
        
      </div>
      <div style={{backgroundColor: '#EBEEE8', height: '100vh' }}></div>
    </>
  );
}
