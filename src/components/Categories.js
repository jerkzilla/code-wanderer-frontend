import React from 'react'
import {connect} from 'react-redux'
import {fetchResources} from '../actions/fetchResources'

const Categories = (props) => {
    
 const handleClick = (event) => {
        event.preventDefault()   
        //   debugger
       let catName = event.target.innerText
       props.fetchResources(catName)
    }
    
    return (
<div>

    {props.categories.map(category => <li onClick={handleClick}key={category.id}>{category.name}</li> )}

</div>

    )

}



export default connect(null, {fetchResources})(Categories)