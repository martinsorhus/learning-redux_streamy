import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

import history from '../../history'
import Modal from '../Modal'

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        return (
        <Fragment>
            <button
                className="ui button negative"
                onClick={() => this.props.deleteStream(this.props.match.params.id)}>
                Delete
            </button>
            <Link to="/" className="ui button">Cancel</Link>
        </Fragment>
        )
    }

    renderContent() {
        if ( !this.props.stream ) {
            return 'Are you sure you want to delete this stream?'
        }
            return `Are you sure you want to delete stream with the title: ${this.props.stream.title}`
    }

    render() {
        return (
                <Modal 
                    title="Delete stream"
                    content={this.renderContent()}
                    actions= {this.renderActions()}
                    onDismiss={() => history.push('/')} />
        )
    }
}
    
const mapStateToProps = ( state, ownProps ) => {
    return { stream: state.streams[ownProps.match.params.id] }
} 

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)