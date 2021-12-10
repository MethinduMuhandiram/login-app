import React from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import UserIcon from "../images/userIcon.jpg";
import Img from "../images/banking.jpg";

import "./LoginForm.css";

function LoginForm() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={Img} />
          </Col>
          <Col lg="4" md="6" sm={12} className="text-center form">
            <h3>Level 1 user Login</h3>
            <div className="login-box">
              <img className="user-icon" src={UserIcon} />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary w-100" type="submit">
                  Login
                </Button>
              </Form>
            </div>

            <div className="m-3">
              <a href="#">Level 2 User Login</a>
            </div>
            <div>
              <a href="#">Level 3 User Login</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
