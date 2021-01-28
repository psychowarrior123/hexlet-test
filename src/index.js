import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component from './Component';
import TodoBox from './TodoBox';
import Card from './Card'

const dom = (
  <Card>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>Text</Card.Text>
    </Card.Body>
  </Card>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Component />
    <TodoBox />
    {dom}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
