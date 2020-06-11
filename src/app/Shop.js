import React from 'react';
import Mail from './images/envelope.jpg';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
export class Shop extends React.Component {


  render() {
    return (
      <div className="shop">
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <div class="card">
                <h2 class="card-title">Contact Me</h2>
                <div class="card-body">
                  <img class="shop-mail" src={Mail}></img>
                  <br></br>
                  <label for="name">Name:</label>
                  <br></br>
              <input type="text"></input>
                  <br></br>
                  <label for="message">Message:</label>
             <textarea id="message" rows="4" cols="50"></textarea>
                </div>
              </div>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>

    )
  }
} export default Shop