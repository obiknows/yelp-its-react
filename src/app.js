import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render: function() {
    return (<div>This is not...a mothhafuckin test that we runnin boi!!</div>);
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
