import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Explore'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Explore'
              path='/sign-up'
            />
           
          </ul>

          <ul className='cards__items'>
          <CardItem
              src='images/img-10.jpg'
              text='Ready for a hike on the mountains?'
              label='Adventure'
              path='/sign-up'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Set Sail in the Oceans'
              label='Explore'
              path='/sign-up'
            />
             <CardItem
              src='images/img-12.webp'
              text='Come and explore the waters.And take a deep swim and a relaxing one at the same time'
              label='Explore'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;