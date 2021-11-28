/* eslint-disable */

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Product from "./Product.js";
import shoesData from "./Data.json";

function Main() {
  const [shoes, shoesChange] = useState(shoesData);

  return (
    <>
      <div className="jumbotron">
        <h1>50% Season Off</h1>
        <p>
          기다리던 시즌 오프 시작! 역대급 혜택으로 필요했던 물건들을 챙겨보세요!
        </p>
        <p>
          <Button variant="primary">Read more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <Product shoes={shoes} />
        </div>
      </div>
    </>
  );
}

export default Main;
