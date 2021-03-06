import React from 'react'
import { Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/beers'>Beers</Link>
          </li>
          <li>
            <Link to='/randomBeer'>random Beer</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
