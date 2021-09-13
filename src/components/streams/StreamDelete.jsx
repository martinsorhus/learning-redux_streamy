import React, { Fragment } from 'react'
import history from '../../history'
import Modal from '../Modal'

const StreamDelete = () => {

    const actions = (
        <Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </Fragment>
    )
    return (
        <div>
            StreamDelete
            <Modal 
                title="Delete stream"
                content="Are you sure you want to delete this stream?"
                actions= {actions}
                onDismiss={() => history.push('/')} />
        </div>
    )
    
}

export default StreamDelete