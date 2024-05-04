import { colorScheme } from "./colorscheme"
import { Link} from "react-router-dom"

const Nav = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: colorScheme.csBlack,
    }
  return (
    <>
        <nav style={{display: 'flex', gap: '18px', fontFamily: 'Markazi Text', fontSize: '15px', textWrap: 'nowrap', padding: '14px 0 10px 0', marginLeft: '80px', fontWeight: 'bold'}}>
            <Link to='/' style={linkStyle}>HOME</Link>
            <Link to="/about" style={linkStyle}>ABOUT</Link>
            <Link to="/menu" style={linkStyle}>MENU</Link>
            <Link to="/reservations" style={linkStyle}>RESERVATIONS</Link>
            <Link to="/order" style={linkStyle}>ORDER-ONLINE</Link>
            <Link to="/login" style={linkStyle}>LOGIN</Link>
        </nav>
    </>
  )
}

export default Nav