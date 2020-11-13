import React from 'react'
import {connect} from 'react-redux'
import {addResource} from '../actions/addResource'

class ResourceInput extends React.Component {

    state = {
        categoryId: '',
        name: '',
        img_url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.addResource(this.state)
    this.setState({
        categoryId: '',
        name: '',
        img_url: ''
        })
    }

    render() {
    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Category:</label>
                    <select name="categoryId" id="category">
                        {this.props.categories.map(category =>  <option value={category.id}> {category.name} </option>)}
                    </select>
                    <input type="text" name="categoryId" value={this.state.categoryId} onChange={this.handleChange}/><br/>
                    <label>Resource Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    
                    <br/>
                    <label>Resource URL: </label>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }


}

const mSTP = globalState => {
    return {categories: globalState.categories}
}

const mDTP = dispatch => {
    return {addResourceWithDispatch: () => dispatch(addResource)}
}

export default connect(mSTP, mDTP)(ResourceInput)