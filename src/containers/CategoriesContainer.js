import React from 'react'
import {connect} from 'react-redux'
import { fetchCategories } from '../actions/fetchCategories'
import Categories from '../components/Categories'
// import Resources from '../components/Resources'

// import React, { Component } from 'react'

class CategoriesContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <Categories categories={this.props.categories}/>
                {/* <Resources resources={this.props.categories.resources}/> */}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
return {
    categories: state.categories
    // resources: state.categories.resources
}

}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer)