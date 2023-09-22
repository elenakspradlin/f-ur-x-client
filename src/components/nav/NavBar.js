import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About F UR X</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/useritems">My Registry</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/items">Registry Inspiration</Link>
            </li>
            {
                (localStorage.getItem("furx_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("furx_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}