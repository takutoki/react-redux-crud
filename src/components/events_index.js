import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions'

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

// storeのstateの中で何を使うかをmapする
const mapStateToProps = state => ({ events: state.events })
// reducerに渡すactionをdispatchに渡す(flow: dispatch→reducer)
// onClickで props.increment と書かれているので、実際は dispatch(increment()) が呼ばれている
// action creator のincrement()は action object を返す
// dispatchはaction objectを引数に取る
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);