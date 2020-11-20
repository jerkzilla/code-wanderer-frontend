import React from 'react';
import {connect} from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import Header from './components/Header'
import { Route, Switch } from "react-router-dom";
import {fetchCategories} from './actions/fetchCategories'
import Home from './components/Home'
import ResourceInput from './components/ResourceInput';
import WandersContainer from './components/WandersContainer'
class App extends React.Component {
  componentDidMount() {
    console.log(this.props)
      this.props.fetchCategories()
     
    }

  render() {
    const wanders = [
      {id: 1, name: "jsHolyGrail", link: "https://docs.google.com/document/d/13zS64bha7k0RT_zM2KgRLhDGMav01BIuJjdLMyHDfGA/edit"},
      {id: 2, name: "htmlDomEvents", link: "https://www.w3schools.com/jsref/dom_obj_event.asp"},
      {id: 3, name: "scrimba", link: "https://scrimba.com/allcourses"},
      {id: 4, name: "serializers", link: "https://itnext.io/a-quickstart-guide-to-using-serializer-with-your-ruby-on-rails-api-d5052dea52c5"},
      {id: 5, name: "expressionsVsStatements", link: "https://2ality.com/2012/09/expressions-vs-statements.html"},
      {id: 6, name: "functionExpression", link: "https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function"},
      {id: 7, name: "destructuring", link: "https://scrimba.com/scrim/cnVZVHE?pl=p7v3gCd"},
      {id: 8, name: "jsProject", link: "https://medium.com/swlh/javascript-project-flatiron-school-bd7c1f3aebd7"},
      {id: 9, name: "deployingHeroku", link: "https://medium.com/@siobhanpmahoney/deploying-a-react-frontend-rails-backend-project-to-heroku-4b2c4f6f630c"}
      ]
      
  return (
      <div className="App">
        <Header />
        <WandersContainer wanders={wanders}/>
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