import React, { Component, PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';

// import Counter from './counter';
// import Addcounter from './addCounter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../redux/actions';
import Counterlist from './counterList';

let style;

class Counters extends Component{

  static propTypes = {
    actions: PropTypes.object.isRequired,
    counters: PropTypes.array.isRequired,
  }


  actionHandler = (action, id) => {
    switch (action) {
      case 'increment':
        this.props.actions.increment(id);
        break;
      case 'decrement':
        this.props.actions.decrement(id);
        break;
      case 'addCounter':
        this.props.actions.addCounter();
        break;
      default :
        break;
    }
  }

  render(){
    return(
      <Counterlist actions={this.actionHandler} counters={this.props.counters} />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.counters };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
