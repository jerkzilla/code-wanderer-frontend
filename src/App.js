import React from 'react';
// import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";
// import {fetchCategories} from './actions/fetchCategories'

class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <ResourcesContainer />
        <CategoriesContainer />
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



export default App;
