import { Link } from "react-router-dom"

function Navbar() {
    return(
        <>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/about'>About</Link>
        <br></br>
        <Link to='/contact'>Contact</Link>
        </>
    )
}

export default Navbar