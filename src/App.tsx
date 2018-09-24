import * as React from 'react';
import { HashRouter as Router, NavLink, Route  } from 'react-router-dom';
// import './App.css';
import { Hello, Main, UserInfo } from './components/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInfo userName='lis'/>
          <Hello compiler="TypeScript" framework="React" />
        </header>
        <Router>
          <div>
            <Route  path="/hello" component={Hello} />
            <Route path="/userInfo" component={UserInfo} />
            <Route path="/main" component={Main} />
          </div>
        </Router>
        <Router>
          <NavLink to="/hello">hello</NavLink>
        </Router>
        <br/>
        <Router>
          <NavLink to="/userInfo">userInfo</NavLink>
        </Router>
        <br/>
        <Router>
          <NavLink to="/main">main</NavLink>
        </Router>
      </div>
    );
  }
}

export default App;
