import React from 'react'
import {connect} from 'react-redux'
import {fetchResources} from '../actions/fetchResources'
import Resources from '../components/Resources'
import { Link } from "react-router-dom";

const Categories = (props) => {

  let catObject = null

 const handleClick = (event) => {
        event.preventDefault()   
        //   debugger
        catObject = props.categories.find(category => category.name === event.target.innerText) 
        props.fetchResources(catObject)    
      
       console.log(catObject)
    }

    return (
        <div>
          
            {props.categories.map(category => <li  onClick={handleClick}
              key={category.id}>
               <Link class="Thx" to={`/categories/${category.id}/resources`}><button class="butt">{category.name}</button></Link>
                </li> )}
                {console.log(catObject)}
             {(catObject !== null) ? <Resources category={catObject}/> : null}
                 
                
        </div>
             )
}

export default connect(null, {fetchResources})(Categories)