import React, { useEffect } from 'react';
import './App.css';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home"
import ContactUs from './Components/ContactUs/ContactUs'
import PastEventsPage from './Components/PastEventsPage/PastEventsPage'
import Rules from './Components/Rules/Rules'
import { Provider } from 'react-redux';

function App() {

  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  const store = configureStore({ history });


  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path = "/Rules" component={Rules} />
            <Route path = "/ContactUs" component={ContactUs} />
            <Route path = "/PastEvents" component={PastEventsPage} />
            <Route path = "/" component={Home} />
            <Route path = "/#" component={Home} />
            <Route component={() => (<div>404 Not found 1</div>)} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
