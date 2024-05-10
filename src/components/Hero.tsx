import { Link } from "react-router-dom"

const Hero = (prop: {page:string}) => {
  const data = {
    'home' : {
      heading : 'Little Lemon',
      subheading : 'Chicago',
      description : 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.',
      image : './assets/restauranfood.jpg',
      alt : 'Sushie on a charcuterie board',
      link : 'Reserve a table'
    },
    'reservations' : {
      heading : 'Reserve A Table!',
      subheading : null,
      description : 'Let our restaurant be the stage for your culinary adventure. Your seat awaits – make your reservation now and indulge in unforgettable flavors.',
      image : './assets/restaurant.jpg',
      alt : 'restaurant',
      link : null
    }
  }
  const page  = prop.page as keyof typeof data
  return (
    <>
        <article className="heroArticle">
            <div  className="heroContents">
            <section className="heroTextSection Markazi">
                <h1  className="heroHeading">{data[page].heading}</h1>
                {data[page].subheading ? <h4 className = "heroSubHeading">{data[page].subheading}</h4> : <></>}
                <p className={"heroDescription Karla"}>{data[page].description}</p>
                {data[page].link ? <Link to="/reservations" className="heroButton :hover Karla">{data[page].link}</Link> : <></>}
            </section>
            <section className="heroImageSection">
                <img src={data[page].image} alt={data[page].alt}  className="heroImage" />
            </section>
            </div>
        </article>
    </>
  )
}

export default Hero