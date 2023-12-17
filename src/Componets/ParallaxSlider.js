// // // // ParallaxSlider.js
// // // import React from 'react';
// // // import Swiper from 'react-id-swiper';
// // // import 'react-id-swiper/lib/styles/css/swiper.css';

// // // const ParallaxSlider = () => {
// // //   const params = {
// // //     speed: 600,
// // //     parallax: true,
// // //     parallaxEl: {
// // //       el: '.parallax-bg',
// // //       value: '-23%',
// // //     },
// // //     pagination: {
// // //       el: '.swiper-pagination',
// // //       clickable: true,
// // //     },
// // //     navigation: {
// // //       nextEl: '.swiper-button-next',
// // //       prevEl: '.swiper-button-prev',
// // //     },
// // //   };

// // //   return (
// // //     <Swiper {...params}>
// // //       {/* Add your slides here */}
// // //     </Swiper>
// // //   );
// // // };

// // // export default ParallaxSlider;
// // // ParallaxSlider.js
// // import React from 'react';
// // import Swiper from 'react-id-swiper';
// // import 'swiper/css/swiper.css';

// // const ParallaxSlider = () => {
// //   const parallaxParams = {
// //     speed: 600,
// //     parallax: true,
// //     parallaxEl: {
// //       el: '.parallax-bg',
// //       value: '-23%',
// //     },
// //     pagination: {
// //       el: '.swiper-pagination',
// //       clickable: true,
// //     },
// //     navigation: {
// //       nextEl: '.swiper-button-next',
// //       prevEl: '.swiper-button-prev',
// //     },
// //   };

// //   return <Swiper {...parallaxParams}>{/* Add your slides here */}</Swiper>;
// // };

// // export default ParallaxSlider;
// // ParallaxSlider.js
// import React from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/swiper-bundle.css';

// const ParallaxSlider = () => {
//   const parallaxParams = {
//     speed: 600,
//     parallax: true,
//     parallaxEl: {
//       el: '.parallax-bg',
//       value: '-23%',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   };

//   return <Swiper {...parallaxParams}>{
//     const slides = [
//         { id: 1, imageUrl: 'path/to/image1.jpg', alt: 'Slide 1' },
//         { id: 2, imageUrl: 'path/to/image2.jpg', alt: 'Slide 2' },
//         { id: 3, imageUrl: 'path/to/image3.jpg', alt: 'Slide 3' },
//       ];
//   }</Swiper>;
// };

// export default ParallaxSlider;

// ParallaxSlider.js
// import React from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/swiper-bundle.css';
// import image1 from '../img/Image1.webp'
// import image2 from '../img/images2.jpeg'
// import image3 from '../img/Image3.webp'

// const ParallaxSlider = () => {
//   const parallaxParams = {
//     speed: 600,
//     parallax: true,
//     parallaxEl: {
//       el: '.parallax-bg',
//       value: '-23%',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   };

  
//   const slides = [
//     { id: 1, imageUrl: image1, alt: 'Slide 1' },
//     { id: 2, imageUrl: image2, alt: 'Slide 2' },
//     { id: 3, imageUrl: image3, alt: 'Slide 3' },
//   ];

//   return (
//     <Swiper {...parallaxParams}>
//       {slides.map((slide) => (
//         <div key={slide.id} className="swiper-slide">
//           <img src={slide.imageUrl} alt={slide.alt} />
//         </div>
//       ))}
//     </Swiper>
//   );
// };

// export default ParallaxSlider;
import React from 'react';
import Swiper from 'react-id-swiper';
import { useSpring, animated } from 'react-spring';
import 'swiper/swiper-bundle.css';
import image1 from '../img/Image1.webp';
import image2 from '../img/images2.jpeg';
import image3 from '../img/Image3.webp';
import './ParallaxSlider.css'


const ParallaxSlider = () => {
  const parallaxParams = {
    speed: 600,
    parallax: true,
    parallaxEl: {
      el: '.parallax-bg',
      value: '-23%',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  // Define the spring outside the render function
  const parallaxSpring = useSpring({
    from: { transform: 'translate3d(0,0,0)' },
    to: { transform: 'translate3d(0, -23%, 0)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const slides = [
    { id: 1, imageUrl: image1, alt: 'Slide 1' },
    { id: 2, imageUrl: image2, alt: 'Slide 2' },
    { id: 3, imageUrl: image3, alt: 'Slide 3' },
  ];

  return (
    <Swiper {...parallaxParams}>
      {slides.map((slide) => (
        <div key={slide.id} className="swiper-slide">
          <animated.img
            src={slide.imageUrl}
            alt={slide.alt}
            className="parallax-bg"
            style={{
              transform: parallaxSpring.transform.interpolate((value) => value),
            }}
          />
        </div>
      ))}
    </Swiper>
  );
};

export default ParallaxSlider;
