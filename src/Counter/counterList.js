export default class Counterlist extends React.Component{

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
                  counter={counter}
                  actions={actions}
                />
          );
          })
        }
      </ListGroup>
        <div>
          <Addcounter
            onAddCounter={this.props.store.dispatch({type: 'ADDCOUNTER'})}
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
