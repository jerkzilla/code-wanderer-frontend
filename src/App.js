import React from 'react';
import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";
import {fetchCategories} from './actions/fetchCategories'
import Home from './components/Home'
import ResourceInput from './components/ResourceInput';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props)
      this.props.fetchCategories()
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      <Switch />
        <Route exact path = '/' render={(routerProps) => <Home {...routerProps}/>}/>
        <Route  exact path='/categories/:id/resources' render={ (routerProps) => {
          const catId = parseInt(routerProps.match.params.id)
          const catObj = this.props.categories.find(category => category.id === catId)
            if (catObj) {
              return ( <ResourcesContainer  category={catObj}/>)
            } else {
              return <div> Loading... </div>
            }
          }} />
        <Route exact path='/categories' component={CategoriesContainer} />
        <Route exact path='/categories/:id/resources/new' render={(routerProps) => <ResourceInput {...routerProps} />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps, {fetchCategories})(App);