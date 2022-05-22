import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import bookStore from '../stores/bookStore';
import BookList from './BookList';
import BModalList from './BModalList';

function BorrowBookModal({ member }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     bookStore.createBook(addBook);
    //     handleClose();
    // }

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
                Borrow Book
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Select The Book You Want to Borrow</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <BModalList member={member} handleClose={handleClose}/>


                <Button variant="primary" type="submit">
                    Add Book
                </Button>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default BorrowBookModal;