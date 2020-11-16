import React from 'react';
import {connect} from 'react-redux';
import { deleteResource} from '../actions/deleteResource'

const Resources = (props) => {
        if (!props.resources) {
        return null;
        }
    return (
        <div>
            {
            props.resources.map(resource => 
                <li key={resource.id}>
                <a href={resource.img_url}>
                <img src={resource.img_url} 
                alt={resource.name} width="400" height="400"/></a>
                {/* <button
                className="delete-btn"
                onClick={this.props.deleteResource}
                data-resourceid={resource.id}
                ></button> */}
                </li> ) 
            }
        </div>
    )
}

const mSTP = state => {
    // debugger
    return {resources: state.resources}
}

export default connect(mSTP, {deleteResource})(Resources)