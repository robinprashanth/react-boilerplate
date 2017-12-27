import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import './Layout.scss';

class Layout extends React.Component {
  componentWillMount() {
    setAuthorizationToken(localStorage.getItem('jwtToken'));
  }
  render() {
    return (
      <div>
        <Header />
        <div
          className="container-fluid"
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
