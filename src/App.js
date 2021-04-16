import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactsList from './Components/ContactsList';
import * as operations from './redux/contacts/contacts-operations';

class App extends Component {
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

export default connect(null, mapDispatchToProps)(App);
