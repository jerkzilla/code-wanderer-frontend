import React, { Component } from 'react'
import {connect} from 'react-redux'
import { deleteResource} from '../actions/deleteResource'
// import {fetchResources} from '../actions/fetchResources'

class Resource extends Component {
   
    handleClick = (event) => {
        event.preventDefault()
        // debugger
        let categoryId = event.target.dataset.categoryid
        let resourceId = event.target.dataset.resourceid
        this.props.deleteResource(categoryId, resourceId)
        // console.log(this.props)
        // this.props.history.push(`/categories/${categoryId}/resources`);

    }



    render() {                
        console.log(this.props.resource.category_id)

        return (
            <div> 
                <li key={this.props.resource.id}>
                <button 
                        onClick={this.handleClick}
                        data-resourceid={this.props.resource.id}
                        data-categoryid={this.props.resource.category_id}
                >Delete Resource</button>
                <a href={this.props.resource.img_url}>
                <img src={this.props.resource.img_url} 
                alt={this.props.resource.name} width="400" height="400"/></a>
                
                </li> 
            </div>
        )
    }
}

export default connect(null, {deleteResource})(Resource)