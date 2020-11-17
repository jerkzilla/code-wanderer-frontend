// import React, { Component } from 'react'
// // import CategoriesContainer from '../containers/CategoriesContainer'
// import { Link } from "react-router-dom";
// import {connect} from 'react-redux'
// import {fetchResources} from '../actions/fetchResources'
// import Resource from '../components/Resource'
// // debugger
//  const Category = (props) => {
    
//     let catObject = null
  
//     // console.log(this.props)
//  const handleClick = (event) => {
//                     event.preventDefault()   
//                     //   debugger
//                     catObject = props.categories.find(category => category.name === event.target.innerText) 
//                     props.fetchResources(catObject)    
//                    console.log(catObject)
//                 }
   
//         return (
//             <div>
                

//                         <li onClick={handleClick}  >
            
//               <button class="butt">{props.category.name}</button>
//             {(catObject !== null) ? <Resource 
//                                             resources={props.resources}
//                                             category={catObject}/> : null} 
//                </li> 
                    
                
                  
                  
               
                
//             </div>
//         )
//     }


// const mapStateToProps = state => {
//     return {
//         categories: state.categories,
//         // resources: state.categories.resources
//     }
//   }
  
//   export default connect(mapStateToProps, {fetchResources})(Category)