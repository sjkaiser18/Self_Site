import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link,NavLink,Redirect } from 'react-router-dom';
import {withRouter} from 'react-router';
import {slideInDown} from 'react-animations';
import styled,{keyframes} from 'styled-components';
import jss from 'jss';
import fashion from './images/fashion.png';
import dating from './images/dating.png';
import diy from './images/diy.png';
const Slide=styled.div`animation: 2s ${keyframes`${slideInDown}`}`;
export class Header extends React.Component
{
    
    render(){
        return(
        <Slide>
            <div className="container-fluid">
                <div className="row">
                
                
                 <NavLink to={`/`} 
                activeClassName="active"
                 className="homescreen">
                     
                      <img className="img-fluid" src={fashion}>
                         </img></NavLink> 
                 
                

                
                 
                     <Link to={`/Shop`} 
                activeClassName="active"
                 className="homescreen"> 
                      <img className="img-fluid" src={diy}>
                         </img></Link> 
                 
                
                
                    
                     <NavLink to={`/Cart`} 
                 activeClassName="active"
                 className="homescreen"> 
                     <img className="img-fluid" src={dating}>
                         </img></NavLink> 
                 
               
                 
                 </div>
               
            </div>
        </Slide>     
            )
}
}export default Header