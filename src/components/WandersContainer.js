import React, { Component } from 'react'
import Wander from '../components/Wander'
import {shuffleWanders } from '../actions/shuffleWanders'
import { connect } from 'react-redux';


 class WandersContainer extends Component {
   
    state = {
        isClicked: false
    }

    handleClick = () => {
        this.props.shuffleWanders(this.props.wanders)
        this.setState({isClicked: true})
        
        
    }

    render() {
        const hasBeenClicked = this.state.isClicked === true

        return (
            <>
            <button class="btn btn-two" onClick={this.handleClick}>
            WANDER</button>
            {hasBeenClicked ? (
             <Wander /> 
             
             )
             : (
                null
             )
             }
            </>
        )
    }
}

export default connect(null, {shuffleWanders})(WandersContainer)

