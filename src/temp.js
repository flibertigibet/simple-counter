<div style={style.counter} className="bootstrap-border centered app">
  {/*<div>
    <Counter
      value={this.props.value}
      onIncrement={this.props.onIncrement}
      onDecrement={this.props.onDecrement}
    />
</div>*/}
  <ListGroup style={{ overflowY: 'scroll', maxHeight: '300px' }}>
  {
    this.props.counters.map((counter) => {
      return (
          <Counter
            key={counter.id}
            value={this.props.store.getState()}
            onIncrement={this.props.store.dispatch({type: 'INCREMENT', ID: 0})}
            onDecrement={this.props.store.dispatch({type: 'INCREMENT', ID: 0})}
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
