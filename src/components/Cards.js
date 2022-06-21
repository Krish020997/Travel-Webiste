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
              src='images/ladakh.jpg'
              text='Explore the hidden beauty of advetaure capital of India Ladakh'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/andaman.jpg'
              text='Travel through the Beautiful Islands of Andaman and Nicobar'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tamilnadu.jpg'
              text='Explore the marvellous Architecture of South Indian Temples'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/manali.jpg'
              text='Experince the snowfall on the top of Himalayas.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Thar Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
// import React from 'react';
// import './Cards.css';
// import CardItem from './Carditem';

// function Cards() {
//   const some = [{
//               src:'./images/img-9.jpg',
//               text:'Explore the hidden waterfall deep inside the Amazon Jungle',
//               label:'Adventure',
//               path:'/services',
//   },
     
// {
//             src:'/src/images/img-3.jpg',
//               text:'Travel through the Islands of Bali in a Private Cruise',
//               label:'Luxury',
//               path:'/services',
// },]
//   return (
//     // <div className='cards'>
//     //   <h1>Check out these EPIC Destinations!</h1>
//     //   <div className='cards__container'>
//     //     <div className='cards__wrapper'>
//     //       <ul className='cards__items'>
//        <div>
//             <CardItem
//               src={some[0].src}
//               text={some[0].text}
//             />
//             <CardItem
//               src={some[1].src}
//               text={some[1].text}
//             />
//             </div>
//   //           {/* <CardItem
//   //             src='/src/images/img-2.jpg'
//   //             text='Travel through the Islands of Bali in a Private Cruise'
//   //             label='Luxury'
//   //             path='/services' */}
//   //           {/* /> */}
//   //         // </ul>
//   //         {/*<ul className='cards__items'>
//   //           <CardItem
//   //             src='/src/images/img-3.jpg'
//   //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
//   //             label='Mystery'
//   //             path='/services'
//   //           />
//   //           <CardItem
//   //             src='/src/images/img-4.jpg'
//   //             text='Experience Football on Top of the Himilayan Mountains'
//   //             label='Adventure'
//   //             path='/products'
//   //           />
//   //           <CardItem
//   //             src='/src/images/img-8.jpg'
//   //             text='Ride through the Sahara Desert on a guided camel tour'
//   //             label='Adrenaline'
//   //             path='/sign-up'
//   //           />
//   // </ul>*/}
//   //   //     </div>
//   //   //   </div>
//   //   // </div>
//   );
// }

// export default Cards;