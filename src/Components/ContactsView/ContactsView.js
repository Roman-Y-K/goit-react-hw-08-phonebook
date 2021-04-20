import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import * as operations from '../../redux/contacts/contacts-operations';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
