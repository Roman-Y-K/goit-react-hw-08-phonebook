import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <MainNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
