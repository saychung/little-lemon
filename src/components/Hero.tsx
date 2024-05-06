import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
        <article className="heroArticle">
            <div  className="heroContents">
            <section className="heroTextSection Markazi">
                <h1  className="heroHeading">Little Lemon</h1>
                <h4 className = "heroSubHeading">Chicago</h4>
                <p className={"heroDescription Karla"}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.</p>
                <Link to="/reservations" className="heroButton :hover Karla">Reserve a Table</Link>
            </section>
            <section className="heroImageSection">
                <img src="./assets/restauranfood.jpg" alt="Sushie on a charcuterie board" width={280} height={295} className="heroImage" />
            </section>
            </div>
        </article>
    </>
  )
}

export default Hero