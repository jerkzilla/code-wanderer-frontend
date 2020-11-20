import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Wander from '../components/Wander'
import { useMemo } from 'react'
import { Route } from "react-router-dom";
import {shuffleWanders } from '../actions/shuffleWanders'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

 class WandersContainer extends Component {
   
    state = {
        isClicked: false
    }

    

    handleClick = () => {
        this.props.shuffleWanders(this.props.wanders)
        this.setState({isClicked: true})
        // window.location.assign(this.props.wanders[0].link)
        // const history = useHistory()
        // history.go(0)
    //    return <Redirect to='/' />
    }

    render() {

        const hasBeenClicked = this.state.isClicked === true

        return (
            <>
            <button class="Thx" onClick={this.handleClick}>
            
            WANDER</button>
            {hasBeenClicked ? (
             <Wander /> )
             : (
                null
             )
             }
              
            
                     
            </>
        )
    }

}

export default connect(null, {shuffleWanders})(WandersContainer)

