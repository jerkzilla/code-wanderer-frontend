import React from 'react'
import ResourceInput from '../components/ResourceInput'
import Resources from '../components/Resources'



class ResourcesContainer extends React.Component {

  render() {
    return (
      <div>
        
          <ResourceInput category={this.props.category}/><br/>
          <Resources resources={this.props.resources}/>
      </div>

    )

  }

}


export default ResourcesContainer