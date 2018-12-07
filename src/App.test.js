import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { qdtConfig, qdtConnections, TurnkeyLogInAppID } from './qlik-config/qlikConfig';
// import QdtComponents from 'qdt-components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('creates an instance of qdtComponent', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
  
// })