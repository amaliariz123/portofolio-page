import React, { Component } from 'react';
import { Menu } from 'antd';
import '../App.css';

class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
             <Menu.Item key="search">
                    <a href=""><div className="icon-search3"></div></a>
                </Menu.Item>
                <Menu.Item key="mail">
                    <a href=""><b>Login</b></a>
                </Menu.Item>
                {/* <Menu.Item  key="menu">
                    <p onClick={this.props.showDrawer}>
                        <Icon className="btn-menu-navbar" type="menu-unfold"/>
                    </p>
                </Menu.Item> */}
            </Menu>
        );
    }
}
export default RightMenu;