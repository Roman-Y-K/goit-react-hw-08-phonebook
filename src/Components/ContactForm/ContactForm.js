import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });

    this.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            placeholder="Number"
            name="number"
            value={this.state.number}
            type="tel"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
      // <form onSubmit={this.handleSubmit}>
      //   <label className={styles.label} htmlFor={nameInputId}>
      //     Name
      //   </label>
      //   <input
      //     className={styles.input}
      //    name="name"
      //     value={this.state.name}
      //     type="text"
      //     onChange={this.handleChange}
      //     id={nameInputId}
      //   />
      //   <label className={styles.label} htmlFor={phoneInputId}>
      //     Number
      //   </label>
      //   <input
      //     className={styles.input}
      //     name="number"
      //     value={this.state.number}
      //     type="tel"
      //     onChange={this.handleChange}
      //     id={phoneInputId}
      //   />
      //   <button className={styles.button} type="submit">
      //     Add contact
      //   </button>
      // </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(operations.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
