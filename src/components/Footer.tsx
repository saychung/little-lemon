import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <article className='footerBody'>
            <section className="footerColumns">
                <div className="gridcol1">
                    <img src="./assets/logoWhite.png" alt="logo white" className="imageFooter"/>
                </div>
                <div className="leftBorder gridcol2">
                    <h1 className='sitemap'>SITE MAP</h1>
                    <div className="linkBox">
                    <Link to='/' className="linkFooter">Home</Link>
                    <Link to="/about" className="linkFooter">About</Link>
                    <Link to="/menu" className="linkFooter">Menu</Link>
                    <Link to="/reservations" className="linkFooter">Reservation</Link>
                    <Link to="/order" className="linkFooter">Order</Link>
                    <Link to="/login" className="linkFooter">Login</Link>
                    </div>
                </div>
                <div className="gridcol1 leftBorder">
                    <h1 className="contactUs">CONTACT US</h1>
                    <div className="contactBox">
                        <p className="contactFooter">
                            678 Pisa Ave, Chicago, IL 60611s
                        </p>
                        <p className="contactFooter">
                            (123) 456-7890
                        </p>
                        <p className="contactFooter">
                            customer@littlelemon.com
                        </p>
                    </div>
                </div>
                <div className="leftBorder gridcol2">
                    <h1 className="connectWithUs">CONNECT WITH US</h1>
                    <div className="socialMediaLogos">
                        <div className="socialLogoSoloBox">
                            <img src="./assets/facebook.svg" alt="facebook" className="socialMediaLogo"/>
                            Facebook
                        </div>
                        <div className="socialLogoSoloBox">
                            <img src="./assets/instagram.svg" alt="instagram" className="socialMediaLogo"/>
                            Instagram
                        </div>
                        <div className="socialLogoSoloBox">
                            <img src="./assets/twitter.svg" alt="twitter" className="socialMediaLogo"/>
                            Twitter
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </>
  )
}

export default Footer