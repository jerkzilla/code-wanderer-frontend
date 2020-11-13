import React from 'react'
import { Link } from "react-router-dom";


// const Header = () => {}
function Header() {
  return (
      <div id="header">
        <img
          src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/StumbleUpon-hed-796x419.jpg"
          alt="header" 
        /><br/>
         <Link to="/categories/ruby"><button>Make A New Resource</button></Link>
         <Link to="/categories"><button>View Resources</button></Link>
         <br/>
         <br/>
      </div>
  )
}

export default Header;