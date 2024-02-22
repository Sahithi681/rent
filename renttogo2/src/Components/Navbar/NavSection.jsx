
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/Logo/logo.png'

import '../Navbar/NavSection.css'



function NavSection() {
/*    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
      setNavActive(!navActive);
    };

    const closeMenu = () => {
      setNavActive(false);
    };

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 500) {
          closeMenu();
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize",handleResize);
      };
    }, []
    );
    useEffect(() => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    });
*/
    return (
      <nav className="navbar">
        <div>
          <NavLink to="/"><img  src={logo} alt="logo" className="logo"></img>
          </NavLink>
        </div>

       
        <div className='navbar--items '>
          <ul>
            <li>
              <NavLink to="/" className="navbar--content">
              Home
            </NavLink>
              
            </li>

            <li>
            <NavLink to="/about" className="navbar--content">
              About
            </NavLink>
            </li>

            <li>
            <NavLink to="/category" className="navbar--content">
              Category
            </NavLink>
            </li>

            <li>
            <NavLink to="/contactme" className="navbar--content">
              ContactMe
            </NavLink> 
            </li>

            <li>
            <NavLink to="/login" className="navbar--content">
              Login
            </NavLink> 
            </li>
          </ul>

        </div>
      </nav>
      
    );
}

export default NavSection