import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact3 = () => {
  const form = useRef();
  const [name, setName]  = useState("")
  const [email, setEmail]  = useState("")
  const [message, setMessage]  = useState("")


  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email : "ladainansari470@gmail.com",
      to_name : "jhon(Admin)",
    };

    const publicKey = "q-Kjbf35A7-HeULP3";
    const serviceId = "service_dytzn88";
    const templateId = "template_4gpmb14";

    emailjs
      .send(serviceId, templateId,templateParams, {
        publicKey:  publicKey ,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container>
      <h2 className="text-center fs-3 my-4">Contact Form</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name " name = "from_name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name = "from_email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId = "exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as = "textarea" rows={3} name = "message" onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>

        <Button variant="info" className="text-white" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact3;
