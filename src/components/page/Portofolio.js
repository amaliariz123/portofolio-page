import React from 'react';
import axios from 'axios';
import MyCard from '../MyCard';
import {Row,Col} from 'antd';

const API_URL = 'https://my-json-server.typicode.com/amalxx123/portofolio/portofolio';

class Portofolio extends React.Component {

   constructor(props){
     super(props);
     this.state = {
       portofolio : [],
       isLoaded : false,
     }
   }
      componentDidMount(){
        axios.get(API_URL)
        .then(json => {const portofolio = json.data; this.setState({ portofolio}) })
        // .then(newData => this.setState({porto: newData, store: newData}))
        .catch(error => alert(error))
      }

      componentDidUpdate(){
        // console.log("updated",this.state.portofolio)
      }

    render() {
     const {portofolio} = this.state
        return (
          <div style={{width:'100%', paddingTop:50, paddingBottom:50}}>
            <span className="heading-meta">My Works</span>
                <h2>Portofolio Info</h2>
                <hr/>
                <br/>
                <Row gutter={8}>
                  <Col offset={2} span={20}>
                    <Row gutter={16}>
                    <MyCard porto={portofolio} />
                    </Row>
                  </Col>
                 </Row>
            </div>
        )
    }
}

export default Portofolio;