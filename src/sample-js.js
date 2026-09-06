var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render() {
    return <h1 id='app'>Hello</h1>;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));



var React = require('react');
var ReactDom = require('react-dom');

var myComponent = React.createClass({
  render(){
    return <h1>Hello</h1>
  }
})

ReactDom.render(<myComponent />, document.getElementById())
