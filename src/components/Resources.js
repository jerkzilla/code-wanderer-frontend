import React from 'react'
// import { fetchResources } from '../actions/fetchResources'
import {connect} from 'react-redux'
import {fetchResources} from '../actions/fetchResources'


class Resources extends React.Component {
    
    state = {}

    componentDidMount() {
        // debugger
        // this.props.fetchResources()
    }

    render() {
        return (
            <div>
                resources
              {/* {this.props} */}

                {/* {this.props.resources.map(resource => 
                    <li key={resource.id}> {resource.name} - <img src={resource.img_url} alt={resource.name}/> </li>
                  )} */}

            </div>

        )


    }



}

const mapStateToProps = state => {
    return {
        categories: state.resources
    }
    
    }

export default connect(mapStateToProps, {fetchResources})(Resources)