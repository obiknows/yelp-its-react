import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

const App = React.createClass({
  render: function() {
    return (
      <div>
        This is not...a <b>mothhafuckin test</b> that we runnin boi!!!
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
