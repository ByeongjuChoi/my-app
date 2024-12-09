import React, { useState } from "react";
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div>
            <div className='navbar'>
                <div className="leftSide" id={openLinks ? "open":"close"}>
                    <img src={Logo}/>
                    <div className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/SignUp">SignUp</Link>
                        <Link to="/Login">Login</Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/Login">Login</Link>
                    <button onClick={toggleNavbar}> 
                        <MenuIcon /> 
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar