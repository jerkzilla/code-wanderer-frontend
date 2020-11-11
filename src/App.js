import React from 'react';
import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
// import {fetchCategories} from './actions/fetchCategories'

class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <CategoriesContainer />
        
      </div>
    );
  }
  
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }



export default connect()(App);
