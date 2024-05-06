import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <>
    <div id="header" className="headerBody">
        <div className="header">
          <Logo />
          <Nav />
        </div>
      </div>
    </>
  )
}

export default Header