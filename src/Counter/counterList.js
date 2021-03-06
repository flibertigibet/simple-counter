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
      <div style={style.counterList} className="bootstrap-border centered counter-container">
        <ListGroup style={{overflowY: 'scroll', height: '200px' }}>
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
        <div style={{ marginTop: '50%', marginLeft: '10px' }}>
          <Addcounter
            actions={this.props.actions}
          />
        </div>
      </div>
    );
  }
}

style = {
  counterList: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    flexGrow: '1',
  },
}

export default Counterlist;
