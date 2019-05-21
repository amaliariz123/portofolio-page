import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Portofolio from './Portofolio';
import Profile from './Profile';
import Home from './Home';
import Contact from './Contact';


class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portofolio" component={Portofolio}/>
            
            </Switch>
        )
    }
}

export default Main;