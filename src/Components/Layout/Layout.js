import React from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import Header from '../Nav/Nav';
import SidebarLeftPush from '../SidebarLeftPush/SidebarLeftPush';

import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable className="layout" as={Segment}>
          <SidebarLeftPush />
          <Sidebar.Pusher>
            <Segment basic>
              <Header />
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Layout;
