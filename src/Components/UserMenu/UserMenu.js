import React from 'react';

import styles from './styles.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { connect } from 'react-redux';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.userMenu}>
      <span className={styles.userName}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
