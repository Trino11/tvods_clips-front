import { Outlet, NavLink } from "react-router-dom";


function Sidebar() {
    return <>
        <ul>
            <li>
                <NavLink to="/home" className="" activeClassName="">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/recents" className="" activeClassName="">
                    Recents
                </NavLink>
            </li>
            <li>
                <NavLink to="/top" className="" activeClassName="">
                    Top
                </NavLink>
            </li>
        </ul>
        <Outlet />
    </>
}

export default Sidebar;