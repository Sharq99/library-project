import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import membersStore from '../stores/memberStore';

function AddMemberModal() {

    const [show, setShow] = useState(false);
    const [addMember, setAddMember] = useState({
        "_id": 0,
        "firstName": '',
        "lastName": '',
        "membership": 'silver',
        "currentlyBorrowedBooks": [],
        "slug": '',
    });

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setAddMember({ ...addMember, [event.target.name]: event.target.value, });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        membersStore.createMember(addMember);
        handleClose();
    }

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
                Add New Member
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add A Member</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="First Name"
                            autoFocus
                            name="firstName"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="Last Name"
                            autoFocus
                            name="lastName"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Membership</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            placeholder="Membership"
                            autoFocus
                            name="membership"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Member
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default AddMemberModal;