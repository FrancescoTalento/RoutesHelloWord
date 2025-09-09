import { NavLink } from "react-router";
import "./MenuLink.css";


export default function MenuLink({children, to}){
    return(
        <NavLink 
            to={to}
            className={(propNav) =>  propNav.isActive ? "link currentLink" : "link"}
        >
            {children}
        </NavLink>
    )
}