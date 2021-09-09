import React from "react";
import {NavLink} from "react-router-dom"

function Nav () {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to ='/' className="buttonstyle">
                        Home
                    </NavLink>
                    <NavLink to='/about' className="buttonstyle">
                        About
                    </NavLink>
                    <NavLink to='/projects' className="buttonstyle">
                        Portfolio
                    </NavLink>
                    <NavLink to='/contact' className="buttonstyle">
                        Contact
                    </NavLink>
                </nav>
            </div>

        </header>
    )
}

export default Nav