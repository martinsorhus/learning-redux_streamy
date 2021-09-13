import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ touched, error }) {
        if ( touched && error ) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">submit</button>
            </form>
        )
    }
}

const validate = ( values ) => {
    const errors = {}
    if ( !values.title ) {
        errors.title = 'Title required'
    } else if ( values.title.length > 20) {
        errors.title = 'Title is too long'
    }

    if ( !values.description ) {
        errors.description = 'Stream must have a description'
    } else if ( values.description.length < 3 ) {
        errors.description = 'Description need a longer text'
    }
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)
