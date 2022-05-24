import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../stores/bookStore";

function AddBookModal() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [addBook, setAddBook] = useState({
    author: "",
    title: "",
    genres: ["Fantasy"],
    available: true,
    image: "",
  });

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setAddBook({ ...addBook, [event.target.name]: event.target.value });
  };

  const handleGenre = (event) => {
    const bookarr = addBook;
    
    if (count === 0) {
      bookarr.genres.pop();
      setCount(count + 1);
    }

    bookarr.genres.push(event.target.value);
    setAddBook(bookarr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.createBook(addBook);
    handleClose();
  };

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
              <Form.Label>Choose Genre</Form.Label>
              <Form.Select
                aria-label="Floating label select example"
                name="genres"
                onChange={handleGenre}
              >
                <option selected>Select A Genre</option>
                <option value="Action">Action</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Fiction">Fiction</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Thriller">Thriller</option>
                <option value="Suspense">Suspense</option>
                <option value="Biography">Biography</option>
                <option value="Business">Business</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Crime">Crime</option>
                <option value="Mystery">Mystery</option>
              </Form.Select>
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
