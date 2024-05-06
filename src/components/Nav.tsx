import { colorScheme } from "./colorscheme"
import { Link, useLocation } from "react-router-dom"
import { useMemo} from "react"

const Nav = () => {
  const path = useLocation().pathname;
  const menuClose = document.getElementById("menuClose")

  const linkStyle = useMemo(() => ({
    textDecoration: 'none',
    color: colorScheme.csBlack,
    fontFamily: '"Karla", sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
  }), []);

  const activeLinkStyle = useMemo(() => ({
    ...linkStyle,
    color: colorScheme.csPeach,
  }), [linkStyle]);

  const openMenu = () => {
    menuClose?.classList.add("Hide")
  }

  const getLinkStyle = (linkPath: string) => {
    return linkPath === path ? activeLinkStyle : linkStyle;
  }
  return (
    <>
    <div className="nav">
      <Link to='/' style={getLinkStyle('/')}>HOME</Link>
      <Link to="/about" style={getLinkStyle('/about')}>ABOUT</Link>
      <Link to="/menu" style={getLinkStyle('/menu')}>MENU</Link>
      <Link to="/reservations" style={getLinkStyle('/reservations')}>RESERVATIONS</Link>
      <Link to="/order" style={getLinkStyle('/order')}>ORDER-ONLINE</Link>
      <Link to="/login" style={getLinkStyle('/login')}>LOGIN</Link>
    </div>
    <div className="navButton">
      <img id='menuClose' src="./assets/menu.svg" alt="menuButton" width={30} height={30} onClick={openMenu}/>
    </div>
    </>
  )
}

export default Nav