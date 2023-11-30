import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Search from './Search'
import { FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa';
import Categories from './Categories';
import { useState } from 'react';

function NavBar({ user, getUser }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    };
    

    return(
        <div className="w-full h-32 bg-black flex items-center">
            <img
                src="https://i.ibb.co/3rs81jf/logo.png"
                alt="logo"
                title="Kbeauty"
                className="w-1/4 ml-8"
            />
            <div className="ml-auto mr-8 flex items-center space-x-4">
                <NavLink to="/"className="text-pinky text-2xl hover:text-zinc-700"> Home</NavLink>
                {user ? (
                    <>
                        <NavLink to="/cart" className="text-pinky text-2xl hover:text-zinc-700" > <FaShoppingCart /> </NavLink>
                        <NavLink to="/profile" className="text-pinky text-2xl hover:text-zinc-700" > <FaUserCircle /> </NavLink>
                        <Logout getUser = { getUser } />
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="text-pinky text-2xl hover:text-zinc-700" > <FaShoppingCart /> </NavLink>
                        <NavLink to="/login" className="text-pinky text-2xl hover:text-zinc-700" > <FaUserCircle /> </NavLink>
                    </>
                )}
                <Search />
            </div>
        </div>
    )
}

export default NavBar;