import React from 'react'
import {connect} from 'react-redux'
import Category from '../components/Category'

const CategoriesContainer = (props) => {
    return (
        <div>
            {props.categories.map(category => 
              <Category category={category}
                        key={category.id} />)}
        </div>
            )
}

const mSTP = state => {
  return {
      categories: state.categories
  }
  
}

export default connect(mSTP)(CategoriesContainer)