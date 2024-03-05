/*hhhh*/
import React from 'react'
import CardItem from './CardItem'
import './FriendsCards.css'

function FriendsCards() {
  return (
    <div className='friendscards'>
        <h1>See what your friends are reading!</h1> 
      <div className="friendscards__container">
        <div className="friendscards__wrapper">
            <ul className="friendscards__items" /*This UL wrapper is what keeps the card items together*/> 
            <CardItem
            src='/images/nightengale.jpg'
            text = 'Currently Reading: The Nightingale'
            label ='Booklover'
            path ='/friends'
            />  
            <CardItem
            src='/images/gg.jpg'
            text = 'Currently Reading: The Great Gatsby'
            label ='User1999'
            path ='/friends'
            />  
            <CardItem
            src='/images/kiterunner.jpg'
            text = 'Currently Reading: Kite Runner'
            label ='Bookworm101'
            path ='/friends'
            />  
    
            <CardItem
            src='/images/p&p.jpg'
            text = 'Currently Reading: Pride and Prejudice'
            label ='PageTurner55'
            path ='/friends'
            /> 
            </ul>
        </div>
      </div>
    </div>
   
  )
}

export default FriendsCards
