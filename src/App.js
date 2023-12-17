// App.js
import React from 'react';
import ParallaxSlider from './Componets/ParallaxSlider';
import ImageSlider from './Componets/imageSlider';
import Image1 from './img/Image1.webp'
import Image2 from './img/images2.jpeg'
import Image3 from './img/Image3.webp'

const App = () => {
  // Your data for the ImageSlider
  const imageSliderImages = [
    { src: Image1, alt: 'Image 1' },
    { src: Image2, alt: 'Image 2' },
    { src: Image3, alt: 'Image 3' },
  ];

  return (
    <div>
      <h2>Parallax Slider</h2>
      <ParallaxSlider />

      <h2>Image Slider</h2>
      <ImageSlider images={imageSliderImages} parallaxIntensity={0.2} transitionSpeed={500} />
    </div>
  );
};

export default App;
