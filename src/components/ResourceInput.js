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
                    <input type="text" name="categoryId" value={this.state.categoryId} onChange={this.handleChange}/>
                    <label>Resource Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    
                    <br/>
                    <label>Resource URL </label>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }


}

export default connect(null, {addResource})(ResourceInput)