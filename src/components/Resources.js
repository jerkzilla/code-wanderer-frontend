import React from 'react';
import {connect} from 'react-redux';
import { fetchResources} from '../actions/fetchResources'

const Resources = (props) => {
//    debugger

if (!props.resources) {
    return null;
}
   return (
        <div>
      {
     props.resources.map(resource => <li key={resource.id}><a href={resource.img_url} ><img src={resource.img_url} width="400" height="400"/></a></li> ) 
     }
        </div>
    )

}

const mSTP = state => {
    // debugger
    return {resources: state.resources}
}



export default connect(mSTP, {fetchResources})(Resources)