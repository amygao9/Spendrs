import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../../styles/home.css';

export default function ShareForm({ addPost, updateData, name, link, price, desc }) {

  return (
    <Card>
      <Card.Body>
        <Card.Title>Share your cop</Card.Title>
      </Card.Body>
      <Card.Body>
        <Form id="shareForm">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" onChange={(e) => updateData(e, "name")} value={name} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Link</Form.Label>
            <Form.Control placeholder="Enter link" onChange={(e) => updateData(e, "link")} value={link} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" onChange={(e) => updateData(e, "price")} value={price} required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Caption</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter caption here..." onChange={(e) => updateData(e, "desc")} value={desc} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option>food</option>
              <option>misc</option>
              <option>tech</option>
              <option>games</option>
              <option>valorant skins</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.File
              className="position-relative"
              name="file"
              label="File"
              feedbackTooltip
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => addPost(e)}>
            Post!
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
