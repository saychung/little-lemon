import { colorScheme } from "./colorscheme"

/* eslint-disable array-callback-return */
const Testimonials = () => {
    const testimonialData = [
        {
            name: 'Peter Dinklage',
            rating: 4,
            review: 'Honestly the best pasta place in Town, Period!',
            image: 'https://media.newyorker.com/photos/5de59f9310863b0009e9d541/master/w_960,c_limit/Schulman-PeterDinklage.jpg'
        },
        {
            name: 'Bill Gates',
            rating: 5,
            review: 'I love splurging my money here, Its worth it!',
            image: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
        },
        {
            name: 'Mahatma Gandhi',
            rating: 5,
            review: 'The food be bussing all day every day no cap!',
            image: 'https://i.redd.it/4exnxbcux3ta1.jpg'
        },
        {
            name: 'Luke Skywalker',
            rating: 5,
            review: 'This place serves the best galactic delicasies. Lots of Force on this one!',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlkxgIDgAjxkQ1XsJsDeK2q1y91j0mT_iyepAa8EYjBxvscwVj7bKyN3w4I6YR9R60pE&usqp=CAU'
        }
    ]
    const ratingStar = [1,2,3,4,5]
  return (
    <>
        <article id='testimonial' style={{backgroundColor: colorScheme.csGreen, padding: '40px 0 100px 0', margin: '0 0 100px 0'}}>
            <section id='testimonialTitle' style={{textAlign: 'center', fontFamily: 'Markazi Text', fontSize: '24px', color: colorScheme.csGrey}}>
                <h1>Testimonials</h1>
            </section>
            <section style={{display: 'flex', justifyContent: 'center', gap: '35px', marginTop: '40px', fontFamily: 'Karla'}} id='testiomonialCard'>
                {
                    testimonialData.map(item=>{
                        return (
                            <div id='card' style={{width: '150px', backgroundColor: colorScheme.csPink, color: colorScheme.csBlack, padding: '10px 10px 30px 10px', borderRadius: '16px' }}>
                                <div style={{display: 'flex', fontSize: '20px'}}>
                                    {ratingStar.map(i=>{
                                    if(i <= item.rating){
                                        return(<p style={{margin: '0',color: colorScheme.csGrey, WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: colorScheme.csBlack}}>*</p>)
                                    }
                                    else{
                                        return(<p style={{margin:'0',color: colorScheme.csBlack,WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: colorScheme.csGrey}}>*</p>)
                                    }
                                })}</div>
                                <h3 style={{margin: '0', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px'}}><img src={item.image} alt= {item.name} style={{height: '80px', width: '75px', borderRadius: '10px'}}/>{item.name}</h3>
                                <p style={{margin: '10px 0 0 0', fontSize: '14px'}}>{item.review}</p>
                            </div>
                        )
                    })
                }
            </section>
        </article>
    </>
  )
}

export default Testimonials