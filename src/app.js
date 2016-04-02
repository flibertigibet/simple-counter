import React from 'react';
import Counter from 'components/counter';
import Addcounter from 'components/addCounter'
// import { Grid, Col } from 'react-bootstrap';

let style;

export default class App extends React.Component{

  render(){
    // console.log(this.props);
    return(
      <div style={style.counter} className="bootstrap-border centered app">
        <div>
          <Counter
            value={this.props.value}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        </div>
        {/*<ListGroup style={{ overflowY: 'scroll', maxHeight: '300px' }}>
        {
          this.props.counters.map((counter) => {
            return (
                <Counter
                  key={counter.id}
                  value={this.props.store.getState()}
                  onIncrement={this.props.store.dispatch({type: 'INCREMENT', ID: {counter.id}})}
                  onDecrement={this.props.store.dispatch({type: 'INCREMENT', ID: {counter.id}})}
                />
          );
          })
        }
      </ListGroup>*/}
        <div>
          <Addcounter
            onAddCounter={this.props.onAddCounter}
          />
        </div>
      </div>
    );
  }
}

style = {
  counter: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
  },
};
