import * as React from 'react';
import { HashRouter as Router, NavLink, Route  } from 'react-router-dom';
import { Hello, UserInfo  } from '..';

class Main extends React.Component {
  public render() {
    return (
      <div className="Main">
        <Router>
          <div>
            <Route  path="/hello" component={Hello} />
            <Route path="/userInfo" component={UserInfo} />
          </div>
        </Router>
        <Router>
          <NavLink to="/hello">hello</NavLink>
        </Router>
        <br/>
        <Router>
          <NavLink to="/userInfo">userInfo</NavLink>
        </Router>
      </div>
    );
  }
}

export default Main;
