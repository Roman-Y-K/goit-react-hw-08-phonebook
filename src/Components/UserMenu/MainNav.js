import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';

const MainNav = ({ isAuthenticated }) => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(MainNav);
