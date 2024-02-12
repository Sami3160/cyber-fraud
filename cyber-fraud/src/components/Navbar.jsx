import './Navbar.css'
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar d-flex justify-content-between align-items-center p-4 ">
            <NavLink to={'/'}>
                <h2 id='home'>Home</h2>
            </NavLink>
            <div className="d-flex justify-content-space-between list-unstyled ">
                <NavLink to={'/types'}>
                    <li className="mx-2">Types in cyber fruad</li>
                </NavLink>
                <li className="mx-2">Reporting</li>
                <li className="mx-2">Contact</li>
                <li className="mx-2">About</li>
            </div>
        </div>
    )
}

export default Navbar;