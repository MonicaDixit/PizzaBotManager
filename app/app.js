var React = require('react');
var ReactDOM = require('react-dom');

var samples = require('./sample-data');

var App = React.createClass({
  getInitialState: function() {
    return { 
      "Humans": {},
      "Stores": {}
    };
  },
  loadSampleData: function(){
    this.setState(samples);
  },
  render: function() {
    return (
      <div>
        <div id="header"></div>
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container">
          <div className="column">
            <Inbox />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    )
  }
});

var Inbox = React.createClass({
  render : function() {
    return (
      <div id="inbox">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <ConversationSummary />
          </tbody>
        </table>
      </div>
    )
  }
});

var ConversationSummary = React.createClass({
  render: function(){
    return (
      <tr>
        <td>5PM</td>
        <td>Rami Sayar</td>
        <td>Order Sent</td>
      </tr>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
