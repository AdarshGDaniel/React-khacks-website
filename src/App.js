import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home"
import ContactUs from './Components/ContactUs/ContactUs'
import PastEventsPage from './Components/PastEventsPage/PastEventsPage'
import Rules from './Components/Rules/Rules'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/Rules" component={Rules} />
          <Route path = "/ContactUs" component={ContactUs} />
          <Route path = "/PastEvents" component={PastEventsPage} />
          <Route path = "/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
