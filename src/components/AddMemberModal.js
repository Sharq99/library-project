import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import membersStore from "../stores/memberStore";

function AddMemberModal() {
  const [show, setShow] = useState(false);
  const [addMember, setAddMember] = useState({
    firstName: "",
    lastName: "",
    membership: "silver",
  });

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setAddMember({ ...addMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    membersStore.createMember(addMember);
    handleClose();
  };

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
              <Form.Label>Choose Membership</Form.Label>
              <Form.Select
                aria-label="Floating label select example"
                name="membership"
                onChange={handleChange}
              >
                <option value="silver" selected>
                  Select A Membership
                </option>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </Form.Select>
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
