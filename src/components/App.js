import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends React.Component {
  
  render() {
    console.log(this.props) // {value: 0, increment: f, decrement: f}
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// storeのstateの中で何を使うかをmapする
const mapStateToProps = state => ({ value: state.count.value })
// reducerに渡すactionをdispatchに渡す(flow: dispatch→reducer)
// onClickで props.increment と書かれているので、実際は dispatch(increment()) が呼ばれている
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()), // 4line: actionsのincrement
  decrement: () => dispatch(decrement()), // 4line: actionsのdecrement
})

export default connect(mapStateToProps, mapDispatchToProps)(App);