import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Image } from 'semantic-ui-react';

class SidebarLeftPush extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { showSideBar } = this.props.global;
    return (
      <div>
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={showSideBar}
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item name="home">
            <Image
              size="big"
              src="/assets/images/logo.png"
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Item name="home">
            Home
          </Menu.Item>
          <Menu.Item name="Dashboard">
            Dashboard
          </Menu.Item>
          <Menu.Item name="Dashboard 2">
            Dashboard 2
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { global: state.global };
}

export default connect(mapStateToProps)(SidebarLeftPush);
