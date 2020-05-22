import React from 'react';
import {Route, Link,BrowserRouter,Switch,NavLink} from 'react-router-dom';
import Header from './app/Header';
import Landing from './app/Landing';
import Shop from './app/Shop';
import Cart from './app/Cart';
export class Routes extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Shop" component={Shop} />
                    <Route exact path="/Cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
            </div>
        )

    }
}export default Routes