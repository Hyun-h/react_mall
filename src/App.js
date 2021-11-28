/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Main from "./Main.js";
import Detail from "./Detail.js";
import shoesData from "./Data.json";

// react-router-dom 설치할 때 react-router-dom@5를 붙이고 설치
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [shoes, shoesChange] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">#Shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* switch = 스위치 생각하면 됨. 라우터 특성상 중복된 루트를 데려오기도 하는데, 제일 상단의 루트를 가지고 옴 */}
      <Switch>
        {/* exact = 안정적으로 홈으로 데려다 줌 */}
        <Route exact path="/">
          <Main />
        </Route>

        {/* :id 아무 루트로 데려가주세요! */}
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
