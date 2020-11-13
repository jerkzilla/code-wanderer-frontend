import React from 'react';
import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";
import {fetchCategories} from './actions/fetchCategories'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchCategories()
}

  render() {
    return (
      <div className="App">
      <Switch />
        <Header />
        <Route exact path='/categories'>
          <CategoriesContainer />
        </Route>
        <Route exact path='/categories/:name' render={(routerProps) => <ResourcesContainer {...routerProps}/>}/>
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

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }



export default connect(null, {fetchCategories})(App);
