
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './ImageSlider.css'; // Create this file for custom styles
// import { useSpring, animated } from 'react-spring';

// const ImageSlider = ({ images, parallaxIntensity, transitionSpeed }) => {
//   const props = useSpring({
//     transform: `translateY(${parallaxIntensity * 100}px)`,
//     config: { mass: 1, tension: 170, friction: 26 },
//   });

//   return (
//     <Carousel
//       showArrows={true}
//       showThumbs={false}
//       infiniteLoop={true}
//       dynamicHeight={false}
//     >
//       {images.map((image, index) => (
//         <div key={index} className="slider-item">
//           <animated.img
//             src={image.src}
//             alt={image.alt}
//             style={{
//               transform: props.transform.interpolate(
//                 (value) => `translateY(${value}px)`
//               ),
//               transition: `transform ${transitionSpeed}ms ease-in-out`,
//             }}
//           />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageSlider;
// ImageSlider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css'; // Create this file for custom styles
import { useSpring, animated } from 'react-spring';

const ImageSlider = ({ images, parallaxIntensity, transitionSpeed }) => {
  const props = useSpring({
    transform: `translateY(${parallaxIntensity * 100}px)`,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      dynamicHeight={false}
    >
      {images.map((image, index) => (
        <div key={index} className="slider-item">
          <animated.img
            src={image.src}
            alt={image.alt}
            style={{
              transform: props.transform.interpolate(
                (value) => `translateY(${value}px)`
              ),
              transition: `transform ${transitionSpeed}ms ease-in-out`,
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

