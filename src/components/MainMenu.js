import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Affix } from 'antd';
import {Link} from 'react-router-dom';


class MainMenu extends Component {
    state = {
        current: 'mail',
        visible: false,
        placement: 'right',
        top: 0,
    };
    
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
    render() {
        return (
            <Affix offsetTop={this.state.top}>
            <nav className="menuBar">
                <div className="logo">
                    <Link to="/home">Aha!</Link>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">
                        <RightMenu showDrawer={() => this.showDrawer()}/>
                    </div>
                    <Button className="barsMenu" name="drawer" role="button" aria-label="openDrawer" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn">
                        </span>
                    </Button>
                    <Drawer
                        title="Aha!"
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}>
                              <ul>
                                  <li><Link to="/home">Home</Link></li>
                                  <li><Link to="/profile">Profile</Link></li>
                                  <li><Link to="/portofolio">Portofolio</Link></li>
                                  <li><Link to="/contact">Contact</Link></li>
                              </ul>
                    </Drawer>
                </div>
            </nav>
            </Affix>
        );
    }
}
export default MainMenu;