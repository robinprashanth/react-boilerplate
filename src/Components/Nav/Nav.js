import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Dropdown, Image, Menu, Button, Icon } from 'semantic-ui-react';
import { toggleSideMenu } from '../../actions/GlobalAction';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility = () => this.props.dispatch(toggleSideMenu());

  render() {
    return (
      <div>
        <Menu fixed="top" size="large">
          <Container>
            <Button className="pusher-btn" icon onClick={this.props.toggleSideMenu}>
              <Icon name="align left" />
            </Button>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="/assets/images/logo.png"
                style={{ marginRight: '1.5em' }}
              />
              Project Name
            </Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>

            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  global: state.global
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleSideMenu,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
