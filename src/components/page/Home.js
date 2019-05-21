import React from 'react'
import {Carousel} from 'antd'

class Home extends React.Component {

    render() {
        return (
            <div className="content">
                 <Carousel autoplay>
                        <div>
                        <h2>Hello <br/> I am Amalia</h2>
                        </div>
                        <div>
                        <h2>I'm a web developer</h2>
                        </div>
                        <div>
                        <h2>"Be a victor, not a victim"</h2>
                        </div>
                    </Carousel>
            </div>     
        )
    }
}

export default Home;