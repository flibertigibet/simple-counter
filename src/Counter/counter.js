import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

let style;

class Counter extends Component{

  static propTypes = {
    counter: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired,
  }

  render(){
    return(
      <div style={style.counter}>
        <div>
          <h1 id="counter">{this.props.counter.count}</h1>
        </div>
        <ButtonToolbar id="counterButtons">
          <Button bsStyle="success" className="btn-block" onClick={this.props.actions('increment',this.props.counter.ID)}> + </Button>
          <Button bsStyle="danger" className="btn-block" onClick={this.props.actions('decrement',this.props.counter.ID)}> - </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

style = {
  counter: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
  },
}

export default Counter;
