import React, { Component } from 'react'
// import CategoriesContainer from '../containers/CategoriesContainer'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import {fetchResources} from '../actions/fetchResources'
import Resource from '../components/Resource'
// debugger
 const Category = (props) => {
        return (
        <>  
           
            <Link class="header2" to={`/categories/${props.category.id}/resources`}>
            <div class="box-1"> <button class="btn btn-one">{props.category.name}</button> </div>    
                    </Link>                    
                   
        </>
        )
}


const mapStateToProps = state => {
    return {
        categories: state.categories,
        // resources: state.categories.resources
    }
  }
  
  export default connect(mapStateToProps)(Category)