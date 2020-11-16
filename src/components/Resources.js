import React from 'react';
// import {connect} from 'react-redux';
// import { deleteResource} from '../actions/deleteResource'
// import {fetchResources} from '../actions/fetchResources'

const Resources = (props) => {
    // debugger
    // console.log(props)  
    // props.fetchResources(props.category)  
    if (!props.category.resources) {
        return null;
        // no cat here click to add
        }

    return (
        <div>
            {/* {props.fetchResources(props.)} */}
            {
            props.category.resources.map(resource => 
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



export default Resources;