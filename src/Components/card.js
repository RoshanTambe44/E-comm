import React from "react";
import './card.css';

export default function Card({image, title, price}) {
  return (
    <div className="">
      <div class="container">
        <div class="card_box">
          <span></span>
            <img className="new-product-image" src={image} />
            <h6 className="new-product-title">{title}</h6>   
            <button className="btn btn-outline-dark" style={{padding:"5px 30px", marginTop:"20px"}}>${price} </button>
        </div>
      </div>
    </div>
  )
}
