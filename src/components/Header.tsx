import Nav from "./Nav"

const logo = './assets/Logo.svg'

const Header = () => {
  return (
    <><div style={{display: "flex", marginLeft: "276.5px", gap: '60px', marginRight: "276.5px", paddingTop: '10px', paddingBottom: '10px', justifySelf: "center", justifyContent: "center", fontFamily: 'Karla'}}>
            <img src={logo} alt='logo' />
            <Nav />
        </div>
    </>
  )
}

export default Header