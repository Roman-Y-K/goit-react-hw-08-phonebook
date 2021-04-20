import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './Components/UserMenu/AppBar';
// import ContactsView from './Components/ContactsView';
// import HomeView from './Components/Views/HomeView';
// import RegisterView from './Components/Views/RegisterForm';
// import LoginView from './Components/Views/LoginView';
import Container from './Components/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./Components/Views/HomeView'));
const RegisterView = lazy(() => import('./Components/Views/RegisterForm'));
const LoginView = lazy(() => import('./Components/Views/LoginView'));
const ContactsView = lazy(() => import('./Components/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Please wait...</p>}>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <PrivateRoute path="/contacts" exact component={ContactsView} />
            <PublicRoute
              path="/register"
              exact
              restricted
              component={RegisterView}
            />
            <PublicRoute path="/login" exact restricted component={LoginView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
