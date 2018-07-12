import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <div>
        <Link to ='/'>Home</Link>{` `}
        <Link to ='/skills'>Skills</Link>{` `}
        <Link to ='/projects'>Projects</Link>
      </div>
    );
  }
}

export default Navbar;
