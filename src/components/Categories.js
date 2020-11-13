import React from 'react'
import {connect} from 'react-redux'
import {fetchResources} from '../actions/fetchResources'
import Resources from '../components/Resources'

const Categories = (props) => {

 const handleClick = (event) => {
        event.preventDefault()   
        //   debugger
       let catName = event.target.innerText
       props.fetchResources(catName)
       console.log(props)
    }
    return (
<div>

    {props.categories.map(category => <li onClick={handleClick}key={category.id}><button>{category.name}</button></li> )}
    
         <Resources resources={props.resources}/>
       
    {/* if({props.resources === undefined}) {<Resources resources={props.resources}/>} */}
        
</div>

    )

}



export default connect(null, {fetchResources})(Categories)