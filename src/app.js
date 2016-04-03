import React from 'react';
import Counters from 'Counter';
import { Router, Route } from 'react-router';

import { connect } from 'react-redux';

let style;

export default class App extends React.Component{

  render(){
    // console.log(this.props);
    return(
      <div className="app">
        <Router history={this.props.history}>
            <Route path="/" component={Counters}>
            </Route>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  counters: React.PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps)(App);

style = {
  counter: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
  },
};
