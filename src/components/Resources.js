import React from 'react';
import {connect} from 'react-redux';

const Resources = (props) => {
//    debugger
   return (
        <div>
    resources
    {/* if {props.resources !== undefined} { 
       props.resources.forEach(resource => <li key={resource.id}>{resource.name}</li> ) 
    } */}
        </div>
    )

}

const mSTP = state => {
    // debugger
    return {resources: state.resources}
}



export default connect(mSTP)(Resources)