import { colorScheme } from "./colorscheme"

const Main = () => {

    const cardData = [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "$12.99",
            image: "./assets/greeksalad.jpg"
        },
        {
            name: "Bruchetta",
            description: "Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
            price: "$5.99",
            image: "./assets/bruchetta.svg"
        },
        {
            name: "Lemon Dessert",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$5.99",
            image: "./assets/lemondessert.jpg"
        }
    ]
    const pageStyle = {
        heroHeading: {
            fontSize: "60px",
            color: colorScheme.csYellow,
            marginTop: "20px",
            marginBottom: "0",

        },
        heroSubHeading: {
            fontSize: "30px",
            margin: "0px"
        },
        heroDescription: {
            fontSize: "20px",
            width: '250px',
            margin: '0',
            marginTop: "20px",
            marginBottom: '5px'
        },
        heroButton: {
            margin: "0",
            fontSize: '20px',
            fontFamily: 'Markazi Text',
            borderRadius: "12px",
            padding: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
            backgroundColor: colorScheme.csYellow,
        }
    }

  return (
    <>
        <article style={{height: "270px", backgroundColor: colorScheme.csGreen}}>
            <div style={{display:"flex", justifyContent: "center", gap: '240px'}}>
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
        <article style={{}}>
            <section style={{display: 'flex', marginTop: '60px', justifyContent: 'center', gap: '310px', alignItems: 'center'}}>
                <h2 style={{textWrap: 'nowrap', margin: '0', fontSize: '50px', fontFamily: 'Markazi Text'}}>This weeks specials!</h2>
                <button style={{margin: "0", height: '40px',border: 'none', fontSize: '15px', fontFamily: 'Karla', borderRadius: "12px", paddingLeft: '20px', paddingRight: '20px', backgroundColor: colorScheme.csYellow}}>Online Menu</button>
            </section>
            <section id="cards" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
                {cardData.map((item, i)=>{
                    return(
                        <div key={i} id={`card${i}`} style={{width: '245px', borderRadius: '16px 16px 0 0', backgroundColor: colorScheme.csGrey }}>
                            <img src={item.image} alt={item.name} width={245} height={160} style={{borderRadius: '16px 16px 0 0'}}/>
                            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 20px 0 20px', fontFamily: 'Markazi Text', fontSize: '20px'}}><h3>{item.name}</h3>
                            <h3>{item.price}</h3></div>
                            <p id="cardDescription" style={{padding: '0 20px 0 20px', whiteSpace: 'pre-wrap', fontFamily: 'Karla', fontSize: '15px', height: '100px'}}>{item.description}</p>
                            <p id='cardFooter' style={{padding: '40px 20px 20px 20px', fontFamily: 'Karla', fontSize: '12px', fontWeight: 'bold', display: 'flex'}}>Order a delivery <img src="./assets/ride.jpg" alt="ride logo" height={20} /></p>
                        </div>
                    )
                })}
            </section>
        </article>
    </>
  )
}

export default Main