import React, { Component, PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';
import Counter from './counter';
import Addcounter from './addCounter';

let style;

class Counterlist extends Component{

  static propTypes = {
    counters: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired,
  }

  render(){
    return(
      <div style={style.counter} className="bootstrap-border centered app">
        <ListGroup style={{ overflowY: 'scroll', maxHeight: '300px' }}>
        {
          this.props.counters.map((counter) => {
            return (
                <Counter
                  key={counter.ID}
                  counter={counter}
                  actions={this.props.actions}
                />
          );
          })
        }
      </ListGroup>
        <div>
          <Addcounter
            actions={this.props.actions}
          />
        </div>
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

export default Counterlist;
