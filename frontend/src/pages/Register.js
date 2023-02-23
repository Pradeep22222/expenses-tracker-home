import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const Register = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    setForm(initialState)
   
    
  };
  return (
    <MainLayout>
      <div className="form_page">
        <Form className="form_form border" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicfirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter first name"
              name="firstName"
              onChange={handleOnChange}
              value={form.firstName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter last name"
              name="lastName"
              onChange={handleOnChange}
              value={form.lastName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChange}
              value={form.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
              value={form.password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="confirmPassword"
              onChange={handleOnChange}
              value={form.confirmPassword}
            />
          </Form.Group>
          <Button
            variant="success"
            size="lg"
            className="form_button"
            type="submit"
          >
            Register
          </Button>
          <div className="text-end">
            Already member? <Link to="/login">login</Link>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
