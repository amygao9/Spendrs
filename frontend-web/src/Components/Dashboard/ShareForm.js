import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../../styles/home.css';

export default function ShareForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Share your cop</Card.Title>
      </Card.Body>
      <Card.Body>
        <Form id="shareForm">
          <Form.Group>
            <Form.Label>Link</Form.Label>
            <Form.Control placeholder="Enter link" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Caption</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter caption here..." />
          </Form.Group>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              feedbackTooltip
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post!
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
