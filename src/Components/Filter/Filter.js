import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Find contact by name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </Form.Group>

      {/*       
      <label htmlFor={filterInputId}>Find contact by name</label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        id={filterInputId}
        onChange={onChange}
      /> */}
    </>
  );
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
