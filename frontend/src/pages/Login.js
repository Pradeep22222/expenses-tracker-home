import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
export const Login = () => {
    return (
      <MainLayout>
        <div className="form_page">
          <Form className="form_form border">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" size="lg" className="form_button">
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
