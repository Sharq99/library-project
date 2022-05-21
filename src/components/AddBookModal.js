import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import bookStore from '../stores/bookStore';

function AddBookModal() {

    const [show, setShow] = useState(false);
    const [addBook, setAddBook] = useState({
        "_id": '',
        "author": '',
        "title": '',
        "genres": ["Fantasy"],
        "available": true,
        "borrowedBy": [],
        "slug": '',
        "image": ''
    });

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setAddBook({ ...addBook, [event.target.name]: event.target.value, });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        bookStore.createBook(addBook);
        handleClose();
    }

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
                Add New Book
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add A Book</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="Author Name"
                            autoFocus
                            name="author"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="Book Title"
                            autoFocus
                            name="title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book Image URL</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="Book Image URL"
                            autoFocus
                            name="image"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default AddBookModal;