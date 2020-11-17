import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { deleteResource} from '../actions/deleteResource'
import {fetchResources} from '../actions/fetchResources'

class Resource extends Component {
   
    componentDidMount() {
        // console.log(this.props.match.params.name)
        // const foundName = this.props.match.params.name
        // console.log(this.props.resources)
        // console.log(foundName)
    //   const foundRes = this.props.resources.find(resource => resource.name === foundName)    
        // console.log(foundRes)
    }
    render() {
        return (
            <div>
                resource

                {
            this.props.resources.map(resource => 
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




                {/* {
            this.props.resources.map(resource => 
               { if (resource.name === this.props.match.params.name) {
               return <li key={resource.id}>
                <a href={resource.img_url}>
                <img src={resource.img_url} 
                alt={resource.name} width="400" height="400"/></a>
                </li> 
            }})} */}
            </div>
        )
    }
}

const mSTP = state => {
    // debugger
    return {resources: state.resources}
}

export default connect(mSTP, {fetchResources})(Resource)