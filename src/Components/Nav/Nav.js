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
                        Projects
                    </NavLink>
                    
                    <a className="buttonstyle" href="mailto:rehmank11@gmail.com">Lets connect</a>

                </nav>
            </div>

        </header>
    )
}

export default Nav