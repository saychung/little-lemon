import { Link } from "react-router-dom"

const ReserveTableSection = () => {
  return (
    <>
        <article className="reservationTableSection">
            <section id="textSection" className="reTextSection">
                <h1 className="reTextTitle Markazi">Little Lemon</h1>
                <p className="reTextDescription Karla">We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <p className="reTextDescription Karla">At Little Lemon, our passion is to embrace the timeless flavors of the Mediterranean, infusing them with a modern twist. We're a family-owned establishment dedicated to bringing you the heartwarming traditions of our heritage, one delectable dish at a time.</p> 
                <Link to='/reservations' className="reLinkButton">Reserve a Table</Link>
            </section>
            <section id="imageSection" className="reImageSection">
                <div className="reImageBox">
                    <img src="./assets/restaurant.jpg" alt="restaurant" className="reImage leftReImage"/>
                    <img src="./assets/chef.jpg" alt="restaurant food" className="reImage rightReImage"/>
                </div>
            </section>
        </article>
    </>
  )
}

export default ReserveTableSection