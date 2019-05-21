import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import {Col} from 'antd';

const { Meta } = Card;

const MyCard = props => {
    const {porto} = props;
        return(
            <div>
                {porto && porto.length > 0 ? (<div>{porto.map(porto =>
                    <Col key={porto.id} xs={48} sm={24} md={24} lg={8} xl={8}>
                        <Card key={porto.id}
                            style={{ width: 300, margin: 10 }}
                            cover={<img alt="Portofolio" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title ={<h5> {porto.name}</h5>}
                                description ={porto.description} />
                        </Card> 
                    </Col>
              
                 )}</div>): null}
            </div>
        )
    }

    export default MyCard;