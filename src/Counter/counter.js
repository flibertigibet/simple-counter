import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, ListGroupItem } from 'react-bootstrap';

let style;

class Counter extends Component{

  static propTypes = {
    counter: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired,
  }

  render(){
    return(
      <ListGroupItem style={style.counter}>
        <div>
          <h1 id="counter">{this.props.counter.count}</h1>
        </div>
        <ButtonToolbar id="counterButtons">
          <Button bsStyle="success" className="btn-block" onClick={function foo() {this.props.actions('increment',this.props.counter.ID)}.bind(this)}> + </Button>
          <Button bsStyle="danger" className="btn-block" onClick={function foo() {this.props.actions('decrement',this.props.counter.ID)}.bind(this)}> - </Button>
        </ButtonToolbar>
      </ListGroupItem>
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
