import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to ='/About'>About</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;