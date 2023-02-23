import React, { useRef } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
   }
    return (
      <MainLayout>
        <div className="form_page">
          <Form className="form_form border" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  ref={emailRef} required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} required  type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" size="lg" className="form_button" type="submit">
              Login
            </Button>
            <div className="text-end">
              New here? <Link to="/register">register</Link>{" "}
            </div>
          </Form>
        </div>
      </MainLayout>
    );
}
