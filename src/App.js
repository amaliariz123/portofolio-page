import React, {Component} from 'react';
import './App.css';
import Main from './components/page/Main';
import MainMenu from './components/MainMenu';
import {Row,Col} from 'antd';


class App extends Component {
    
    render() {
        return (
            <div>
            <MainMenu/>
                <Row guter={8}>
                    <Col offset={4} span={16}>
                <br/>
                <Main/>
            </Col>
            </Row>
            </div>
        )
    }
}

export default App;
