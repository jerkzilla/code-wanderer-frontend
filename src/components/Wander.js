import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';



 class Wander extends Component {
    
    render() {
        return (
            <div>
                {/* <Redirect to= {this.props.wanders.link}/> */}
                {/* <a href={this.props.wanders.link}/> */}
                {window.location.replace(`${this.props.wanders.link}`)}

            </div>
        )
    }
}

const mSTP = globalState => {
    return {wanders: globalState.wanders}
}

export default connect(mSTP)(Wander)