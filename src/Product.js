/* eslint-disable */

import React from "react";

function Product(props) {
  return (
    <>
      {props.shoes.map((data, index) => {
        return (
          <div className="col-md-4" kye={index}>
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (index + 1) +
                ".jpg"
              }
              alt="shoes"
              width="100%"
            />
            <h4>{data.title}</h4>
            <span>{data.price}</span>
            <p>{data.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default Product;
