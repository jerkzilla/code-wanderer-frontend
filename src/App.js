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
import Footer from './components/Footer'
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
      {id: 9, name: "deployingHeroku", link: "https://medium.com/@siobhanpmahoney/deploying-a-react-frontend-rails-backend-project-to-heroku-4b2c4f6f630c"},
      {id: 10, name: "components", link: "https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb"},
      {id: 11, name: "justJava", link: "https://justjavascript.com/"},
      {id: 12, name: "overreacted", link: "https://overreacted.io/"},
      {id: 13, name: "sharkle", link: "https://sharkle.com/"},
      {id: 14, name: "vizualizer", link: "http://iacopoapps.appspot.com/hopalongwebgl/"},
      {id: 15, name: "electricLines", link: "https://codepen.io/hexapode/full/XJPKWY/"},
      {id: 16, name: "dancingInstances", link: "https://guillaumegouessan.com/sketches/dancing-instances/"},
      {id: 17, name: "insideFiber", link: "https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e"},
      {id: 18, name: "understandingGit", link: "https://hackernoon.com/understanding-git-fcffd87c15a3"},
      {id: 19, name: "framerMotion", link: "https://www.framer.com/motion/"},
      {id: 20, name: "cSharpUnity", link: "https://unity3d.com/learning-c-sharp-in-unity-for-beginners"},
      {id: 21, name: "sass", link: "https://sass-lang.com/"},
      {id: 22, name: "flutter", link: "https://flutter.dev/"},
      {id: 23, name: "flexBox", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},
      {id: 24, name: "greenSock", link: "https://greensock.com/"},
      {id: 25, name: "figma", link: "https://www.figma.com/"},
      {id: 26, name: "express", link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"},
      {id: 27, name: "githubPages", link: "https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48"},
      {id: 28, name: "buttonGenerator", link: "https://www.bestcssbuttongenerator.com/#/0"},
      {id: 29, name: "coolPortfolio", link: "https://khang-nd.github.io/"},
      {id: 30, name: "reactProjectBlog", link: "https://medium.com/@julianafogg/react-redux-portfolio-project-804ba6268ea0"},
      {id: 31, name: "combineReducers", link: "https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch"},
      {id: 32, name: "carousel", link: "https://getbootstrap.com/docs/4.0/components/carousel/"},
      {id: 33, name: "reactAndRails", link: "https://www.newline.co/fullstack-react/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"},
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
        <Footer />
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