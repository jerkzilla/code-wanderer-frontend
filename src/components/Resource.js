import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { deleteResource} from '../actions/deleteResource'
// import {fetchResources} from '../actions/fetchResources'

class Resource extends Component {
   
    render() {
        return (
            <div> 
                <li key={this.props.resource.key}>
                <a href={this.props.resource.img_url}>
                <img src={this.props.resource.img_url} 
                alt={this.props.resource.name} width="400" height="400"/></a>
                </li> 
            </div>
        )
    }
}

export default Resource