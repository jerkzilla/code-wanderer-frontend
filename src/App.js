import React from 'react';
import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";
import {fetchCategories} from './actions/fetchCategories'
import Home from './components/Home'
import ResourceInput from './components/ResourceInput';
import Resources from './components/Resources';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchCategories()
}

  render() {
    return (
      <div className="App">
        <Header />
      <Switch />
        <Route path='/categories/:id/resources/new' render={(routerProps) => <ResourceInput {...routerProps} />} />
    <Route exact path = '/' render={(routerProps) => <Home {...routerProps}/>}/>

        <Route  exact path='/categories/:id/resources' render={ (routerProps) => {
            console.log(routerProps.match.params)
            const catId = parseInt(routerProps.match.params.id)
            //  console.log(this.props)
            // debugger
            const resourceObj = this.props.categories.find(category => category.id === catId)

            // console.log(toyObj)

            if (resourceObj) {
              return (
              <Resources  key={resourceObj.id}
                        id={resourceObj.id}
                        name={resourceObj.name}
                        img={resourceObj.img_url}
              />
            )
            } else {
              return <div>Loading... </div>
            }
          }} 
        />
         <Route exact path='/categories'>
          <CategoriesContainer />
        </Route>
        <Route exact path='/categories/:id' render={(routerProps) => <ResourcesContainer {...routerProps}/>}/>
          {/* <ResourcesContainer /> */}
        {/* </Route> */}
        

        {/* <ResourcesContainer /> */}
        {/* <CategoriesContainer /> */}
        {/* <Route  path='/resources'> */}
       
        {/* </Route> */}
        
        
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}



export default connect(mapStateToProps, {fetchCategories})(App);
