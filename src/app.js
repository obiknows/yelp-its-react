import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import styles from './styles.module.css';
import 'font-awesome/css/font-awesome.css';

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.wrapper}>
        <h2>
          <i className='fa fa-terminal fa-2x'></i><br/>
          Environment: {__NODE_ENV__}
        </h2>
        <p>This is not...a <b>mothhafuckin test</b> that we runnin boi!!!</p>
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
