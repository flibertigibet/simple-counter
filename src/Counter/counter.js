import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

let style;

export default class Counter extends React.Component{

  render(){
    return(
      <div style={style.counter}>
        <div>
          <h1 id="counter">{this.props.value}</h1>
        </div>
        <ButtonToolbar id="counterButtons">
          <Button bsStyle="success" className="btn-block" onClick={this.props.onIncrement}> + </Button>
          <Button bsStyle="danger" className="btn-block" onClick={this.props.onDecrement}> - </Button>
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
