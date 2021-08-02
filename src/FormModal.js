import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormModal extends React.Component {
  helpMyModal = (e) => {
    this.props.handleSubmit(e);
    this.props.close();
  }
  render() {
    return(
      <Modal show={this.props.display} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Update or add a book</Modal.Title>
        </Modal.Header>

        <Form onSubmit={this.helpMyModal}>
          <Form.Group controlId="name">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title here..." />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control type="text" placeholder="Enter description here..."/>
          </Form.Group>
         
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control type='text' placeholder='Enter status here...'>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Control type='hidden' value={this.props.email}/>
          </Form.Group>

          <Button type='submit' variant='primpary'>Add Book
          </Button>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default FormModal;