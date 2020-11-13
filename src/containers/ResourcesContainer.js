import React from 'react'
import ResourceInput from '../components/ResourceInput'
import Resources from '../components/Resources'
import {connect} from 'react-redux'



class ResourcesContainer extends React.Component {

  render() {
    return (
      <div>
        
          <ResourceInput categories={this.props.categories}/><br/>
          {/* <Resources categories={this.props.categories}/> */}
      </div>

    )

  }

}

const mapStateToProps = state => {
  // debugger
  return {
      categories: state.categories
      // resources: state.categories.resources
  }
}

export default connect(mapStateToProps)(ResourcesContainer)