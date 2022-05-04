import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{



    return (
        <div>
            <Link to="/addrestraunt">Addrestraunt Details</Link>
            
            <div>
            <Link to='/showrestraunt' >Show Restraunts</Link>
            </div>
        </div>

       
    )
}


export default Navbar;