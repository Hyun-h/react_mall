/* eslint-disable */

import React from "react";

function Product(props) {
  return (
    <>
      {props.shoes.map((data) => {
        return (
          <div className="col-md-4" kye={data.id}>
            <img src={data.img} alt="shoes" width="100%" />
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
