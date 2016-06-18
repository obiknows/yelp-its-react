import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import styles from './styles.module.css';

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.wrapper}>
        <h4>Environment: {__NODE_ENV__}</h4>
        <p>This is not...a <b>mothhafuckin test</b> that we runnin boi!!!</p>
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
