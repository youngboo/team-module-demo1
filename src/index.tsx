import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import { Main } from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
