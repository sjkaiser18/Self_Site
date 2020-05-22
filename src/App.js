import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Landing from './app/Landing';
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
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}
}
export default App;
