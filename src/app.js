import React from 'react';
import Counters from 'Counter';
import { Router, Route } from 'react-router';

import { connect } from 'react-redux';

class App extends React.Component{

  render() {
    const routes = () => {
      return(
        null
      );
    }

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
