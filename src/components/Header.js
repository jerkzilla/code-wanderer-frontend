import React from 'react'
import { Link } from "react-router-dom";


// const Header = () => {}
function Header() {
  return (
      <div id="Thx">
       <br/>
       <br/>
       <div class="one"><h1 class="one">CODE WANDERER</h1></div>
       <br/>
        <Link to="/"><button>Home</button></Link>
         <Link to="/categories/:id/resources/new"><button>Make A New Resource</button></Link>
         <Link to="/categories"><button>View Resources</button></Link>
         
         <br/>
         <br/>
         <br/>
      </div>
  )
}

export default Header;