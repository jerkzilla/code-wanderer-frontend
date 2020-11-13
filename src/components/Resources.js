import React from 'react';
import {connect} from 'react-redux';

const Resources = (props) => {
//    debugger

if (!props.resources) {
    return null;
}
   return (
        <div>
           
      {
     props.resources.map(resource => <li key={resource.id}>{resource.name} <img src={resource.img_url} width="400" height="400"/></li> ) 
     }
        </div>
    )

}

const mSTP = state => {
    // debugger
    return {resources: state.resources}
}



export default connect(mSTP)(Resources)