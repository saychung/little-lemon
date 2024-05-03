import { colorScheme } from "./colorscheme"

const Nav = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: colorScheme.csBlack,
    }
  return (
    <>
        <ul style={{display: "flex", flexWrap: 'nowrap', listStyleType: "none", gap: "25px", fontSize: "1rem", fontWeight: 'bold', textWrap: 'nowrap'}}>
            <li><a href="/" style={linkStyle}>HOME</a></li>
            <li><a href="/" style={linkStyle}>ABOUT</a></li>
            <li><a href="/" style={linkStyle}>MENU</a></li>
            <li><a href="/" style={linkStyle}>RESERVATIONS</a></li>
            <li><a href="/" style={linkStyle}>ORDER ONLINE</a></li>
            <li><a href="/" style={linkStyle}>LOGIN</a></li>
        </ul>
    </>
  )
}

export default Nav