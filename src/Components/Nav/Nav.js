import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Image, Menu, Button, Icon, Input } from 'semantic-ui-react';
import { toggleSideMenu } from '../../actions/GlobalAction';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility = () => this.props.dispatch(toggleSideMenu());

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu fixed="top" size="large">
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
          <Menu.Item
            as="a"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
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
