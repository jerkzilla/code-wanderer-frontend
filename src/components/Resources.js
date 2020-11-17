// import React from 'react';
// // import {connect} from 'react-redux';
// // import { deleteResource} from '../actions/deleteResource'
// // import {fetchResources} from '../actions/fetchResources'

// const Resources = (props) => {
//     // debugger
//     if (props.category === null) {
//         return null;
//         // no cat here click to add
//         }
//         console.log(props)
//     return (
//         <div>

//             {/* {props.fetchResources(props.)} */}
            
//             {props.category.name}

//             {
//             props.category.resources.map(resource => 
//                 <li key={resource.id}>
//                 <a href={resource.img_url}>
//                 <img src={resource.img_url} 
//                 alt={resource.name} width="400" height="400"/></a>
//                 {/* <button
//                 className="delete-btn"
//                 onClick={this.props.deleteResource}
//                 data-resourceid={resource.id}
//                 ></button> */}
//                 </li> ) 
//             }
//         </div>
//     )
// }



// export default Resources;