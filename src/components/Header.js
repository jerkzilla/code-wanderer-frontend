import { Link } from "react-router-dom";
import { fetchCategories} from '../actions/fetchCategories'
import {connect} from 'react-redux'
import React, { Component } from 'react'

 class Header extends Component {
 
  
  render() {
        return (
      <div id="Thx">
       <div class="one"><h1 class="one">CODE WANDERER</h1></div>
       <br/>
       <div class="links">
        <Link class="header" to="/"><button>Home</button></Link>
         <Link class="header" to="/categories/:id/resources/new"><button>Make A New Resource</button></Link>
         <Link  class="header" to="/categories"><button>View Resources</button></Link>
        
         </div> 
         <br/>
         <br/>
         <br/>
      </div>
  )
    
  }
}




// const Header = () => {}
// function Header() {
  
// }

export default connect(null, {fetchCategories})(Header);