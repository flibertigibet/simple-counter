import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Addcounter extends React.Component{

  static propTypes = {
    actions: PropTypes.func.isRequired,
  }

  render(){
    return(
      <div>
        {/*<Button onClick={this.props.onAddCounter}>+</Button>*/}
        <Button onClick={function foo() {this.props.actions('addCounter')}.bind(this)}> + </Button>
      </div>
    );
  }

}
