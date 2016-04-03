import React from 'react';
import { ListGroup } from 'react-bootstrap';

// import Counter from './counter';
// import Addcounter from './addCounter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../redux/actions';
import Counterlist from './counterList';

let style;

export default class Counters extends React.Component{

  // static propTypes = {
  //   actions: PropTypes.object.isRequired,
  // }
  //
  // actionHandler = (action, id) => {
  //   switch (action) {
  //     case 'increment':
  //       this.props.actions.increment(id);
  //       break;
  //     case 'decrement':
  //       this.props.actions.decrement(id);
  //       break;
  //     case 'addCounter':
  //       this.props.actions.addCounter();
  //       break;
  //     default :
  //       break;
  //   }
  // }

  render(){
    return(
      <Counterlist />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
