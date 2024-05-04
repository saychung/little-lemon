import { colorScheme } from "./colorscheme"

const Hero = () => {
    const pageStyle = {
        heroHeading: {
            fontSize: "60px",
            color: colorScheme.csYellow,
            marginTop: "40px",
            marginBottom: "0",

        },
        heroSubHeading: {
            fontSize: "30px",
            margin: "0px"
        },
        heroDescription: {
            fontSize: "20px",
            width: '320px',
            margin: '0',
            marginTop: "20px",
            marginBottom: '20px'
        },
        heroButton: {
            margin: "0",
            fontSize: '20px',
            fontFamily: 'Markazi Text',
            borderRadius: "12px",
            border: 'none',
            padding: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
            backgroundColor: colorScheme.csYellow,
        }
    }
  return (
    <>
        <article style={{height: "270px", backgroundColor: colorScheme.csGreen}}>
            <div style={{display:"flex", justifyContent: "center", gap: '200px'}}>
            <section id="heroText" style={{width:"", color: colorScheme.csGrey, lineHeight:"0.93", fontFamily: 'Markazi Text'}}>
                <h1 style={{...pageStyle.heroHeading, textWrap: 'nowrap'}}>Little Lemon</h1>
                <h6 style={pageStyle.heroSubHeading}>Chicago</h6>
                <p style={pageStyle.heroDescription}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.</p>
                <button style={pageStyle.heroButton}>Reserve a Table</button>
            </section>
            <section id="heroImage" style={{marginTop: "20px"}}>
                <img src="./assets/restauranfood.jpg" alt="Sushie on a charcuterie board" width={280} height={295} style={{borderRadius: "16px"}}/>
            </section>
            </div>
        </article>
    </>
  )
}

export default Hero