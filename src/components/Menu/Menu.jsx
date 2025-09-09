import "./Menu.css"
import MenuLink from "../MenuLink/MenuLink";



const Menu = () =>{
    

    return(
        <header>
            <nav className="navegacao">
               <MenuLink to="/">
                    Home
               </MenuLink>
               <MenuLink to="/aboutMe">
                    About Me
               </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;