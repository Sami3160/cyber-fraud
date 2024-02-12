import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar d-flex justify-content-between align-items-center m-4">
            <h2>Home</h2>
            <div className="d-flex justify-content-space-between list-unstyled ">
                <li className="mx-2">Presentation</li>
                <li className="mx-2">Reporting</li>
                <li className="mx-2">Contact</li>
                <li className="mx-2">About</li>
            </div>
        </div>
    )
}

export default Navbar;