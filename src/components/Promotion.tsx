import { colorScheme } from "./colorscheme"

const Promotion = () => {
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
  return (
    <>
        <article style={{marginTop: '80px', marginBottom: '80px'}}>
            <section style={{display: 'flex', justifyContent: 'center', gap: '225px', alignItems: 'center'}}>
                <h2 style={{textWrap: 'nowrap',padding: '0', margin: '0', fontSize: '50px', fontFamily: 'Markazi Text'}}>This weeks specials!</h2>
                <button style={{padding: '10px 40px 10px 40px',margin: "0",border: 'none', fontSize: '15px', fontFamily: 'Karla', borderRadius: "12px", backgroundColor: colorScheme.csYellow, textWrap: 'nowrap'}}>Online Menu</button>
            </section>
            <section id="cards" style={{display: 'flex', justifyContent: 'center', gap: '35px', marginTop: '40px'}}>
                {cardData.map((item, i)=>{
                    return(
                        <div key={i} id={`card${i}`} style={{width: '245px', borderRadius: '16px 16px 0 0', backgroundColor: colorScheme.csGrey }}>
                            <img src={item.image} alt={item.name} width={245} height={160} style={{borderRadius: '16px 16px 0 0'}}/>
                            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 20px 0 20px', fontFamily: 'Markazi Text', fontSize: '16px'}}><h3>{item.name}</h3>
                            <h3 style={{color: colorScheme.csYellow}}>{item.price}</h3></div>
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

export default Promotion