import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Landing from './app/Landing';
import  Shop from './app/Shop';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './routes';


class App extends React.Component{
  render(){
  return (
    <div>
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/Shop" component={Shop}></Route>
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}
}
export default App;
