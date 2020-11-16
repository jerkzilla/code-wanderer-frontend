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
import Resource from './components/Resource';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
      <Switch />
        <Route exact path='/categories/:id/resources/new' render={(routerProps) => <ResourceInput {...routerProps} />} />
        <Route exact path = '/' render={(routerProps) => <Home {...routerProps}/>}/>
          <Route exact path = '/resources/:name' render={(routerProps) => {
            console.log(routerProps.match.params)
            console.log(this.props)
        // const resId = parseInt(routerProps.match.params.id)
              return <Resource {...routerProps} />}} /> 
        <Route  exact path='/categories/:id/resources' render={ (routerProps) => {
                
                console.log(routerProps.match.params)
                const catId = parseInt(routerProps.match.params.id)
                // console.log(this.props)
                // debugger
                const catObj = this.props.categories.find(category => category.id === catId)
                // debugger
                // const resourceObj = catObj.resources
                // console.log(resourceObj)
            if (catObj) {
              return (
                <Resources  category={catObj}
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
    categories: state.categories,
    resources: state.resources
  }
}



export default connect(mapStateToProps, {fetchCategories})(App);
