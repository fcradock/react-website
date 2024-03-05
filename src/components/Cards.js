/*hhhh*/
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Your Virtual Bookshelf</h1> 
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items" /*This UL wrapper is what keeps the card items together*/> 
            <CardItem
            src='/images/nightengale.jpg'
            text = 'The Nightingale by Kristin Hannah'
            textrating = '&#9733; &#9733; &#9733; &#9733;'
            label ='Historical Fiction'
            path ='/trending'
            />  
            <CardItem
            src='/images/p&p.jpg'
            text = 'Pride and Prejudice by Jane Austen'
            textrating = '&#9733; &#9733; &#9733; &#9733; '
            label ='Romance'
            path ='/trending'
            /> 
            </ul>
            <ul className="cards__items" /*This UL wrapper is what keeps the card items together*/> 
            <CardItem
            src='/images/gg.jpg'
            text = 'Gone Girl by Gillian Flynn'
            textrating = '&#9733; &#9733; &#9733; &#9733;  &#9733;'
            label ='Thriller'
            path ='/trending'
            /> 
            <CardItem
            src='/images/crawdads.jpg'
            text = 'Where the Crawdads Sing by Delia Owens'
            textrating = '&#9733; &#9733; '
            label ='Mystery'
            path ='/trending'
            />  
    
            <CardItem
            src='/images/nightcircus.jpg'
            text = 'The Night Circus by Erin Morgenstern'
            textrating = '&#9733; &#9733; &#9733; '
            label ='Fantasy'
            path ='/trending'
            />
            </ul>
        </div>
      </div>
    </div>
   
  )
}

export default Cards
