import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { postEvent } from '../actions'

class EventsNew extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error }} = field

    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onSubmit(values) {
    console.log({values})
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    // redux-fromでラップしたコンポーネントはpropsとして、handlesubmitが受け取れるようになる
    // handleSubmit()
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>
        <div>
          <input type="submit" value="Submit" disabled={false}/>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors ={}

  if (!values.title) errors.title = "Enter Title, please."
  if (!values.body) errors.body = "Enter Body, please."

  return errors
}

const mapDispatchToProps = dispatch => ({
  postEvent: () => dispatch(postEvent()),
})

// EventsNew componentを redux-formでラップする
// ラップする際にvalidateなどを各種設定を行い、componentを拡張することができる
// この拡張をdecorateすると表現する
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsNewForm'})(EventsNew)
);