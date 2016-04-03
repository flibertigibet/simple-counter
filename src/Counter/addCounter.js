import React from 'react';
import { Button } from 'react-bootstrap';

export default class Addcounter extends React.Component{

  render(){
    return(
      <div>
        {/*<Button onClick={this.props.onAddCounter}>+</Button>*/}
        <Button onClick={this.props.onAddCounter}> + </Button>
      </div>
    );
  }

}
