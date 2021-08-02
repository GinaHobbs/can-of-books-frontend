import React from 'react';
import {Button} from 'react-bootstrap';
import FormModal from './FormModal.js';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    }
  
  }

  showModal = () => {this.setState({displayModal: true})}

  closeModal = () => {this.setState({displayModal: false})}
  
  render() {
    return(
    <>
      <Button onClick={() => this.showModal()}>Show Form</Button>
      <FormModal display ={this.state.displayModal} close={this.closeModal} email={this.props.email} handleSubmit={this.props.handleSubmit} />
    </>
    )
  }
}

export default AddBook;
