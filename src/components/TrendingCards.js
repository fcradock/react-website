/*hhhh*/
import React from 'react'
import CardItem from './CardItem'
import './TrendingCards.css'

function TrendingCards() {
  return (
    <div className='trendingcards'>
        <h1>What's trending on ReadingCircle </h1> 
      <div className="trendingcards__container">
        <div className="trendingcards__wrapper">
            <ul className="trendingcards__items" /*This UL wrapper is what keeps the card items together*/> 
            <CardItem
            src='/images/nightengale.jpg'
            text = 'The Nightingale by Kristin Hannah'
            textrating = '&#9733; &#9733; &#9733; &#9733; &#9733;'
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
            <CardItem
            src='/images/kiterunner.jpg'
            text = 'The Kite Runner by Khaled Hosseini'
            textrating = '&#9733; &#9733; &#9733; &#9733; '
            label ='Drama'
            path ='/trending'
            />  
            </ul>
            <ul className="trendingcards__items" /*This UL wrapper is what keeps the card items together*/> 
            <CardItem
            src='/images/gg.jpg'
            text = 'Gone Girl by Gillian Flynn'
            textrating = '&#9733; &#9733; &#9733; &#9733; &#9733;'
            label ='Thriller'
            path ='/trending'
            /> 
            <CardItem
            src='/images/crawdads.jpg'
            text = 'Where the Crawdads Sing by Delia Owens'
            textrating = '&#9733; &#9733; &#9733; &#9733; &#9733; '
            label ='Mystery'
            path ='/trending'
            />  
    
            <CardItem
            src='/images/nightcircus.jpg'
            text = 'The Night Circus by Erin Morgenstern'
            textrating = '&#9733; &#9733; &#9733;  '
            label ='Fantasy'
            path ='/trending'
            /> 
            </ul>
        </div>
      </div>
    </div>
   
  )
}

export default TrendingCards
