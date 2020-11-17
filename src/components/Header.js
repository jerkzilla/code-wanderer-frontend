import { Link } from "react-router-dom";
import React  from 'react'

 const Header = () =>  {
        return (
      <div id="Thx">
      <div class="one"><h1 class="one">CODE WANDERER</h1></div>
            {/* use syntax below with other css to use as link */}
        {/* <div><h1 class="one"><Link class="one" to="/">CODE WANDERER</Link></h1></div><br/><br/> */}
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

export default Header;