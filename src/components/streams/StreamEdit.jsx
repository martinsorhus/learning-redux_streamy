import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        
        console.log(this.props.stream)
    }

    onSubmit = (formValues) => {
        // console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {

        // const { title, description } = this.props.fetchStream(this.props.match.params.id)

        if ( !this.props.stream ) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')} />
            </div>
            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)