import * as React from 'react';
import './App.css';
import { Hello, UserInfo } from './components';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInfo userName='lisa'/>
          <Hello compiler="TypeScript" framework="React" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
