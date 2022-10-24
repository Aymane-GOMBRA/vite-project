import { NavLink,Link } from 'react-router-dom';
export default function Navbar() {
    return <nav className="nav">
        <Link href="/" className="logo">Logo</Link>
        <ul>
            <li>
                <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    
};
