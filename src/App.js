
import React from 'react';
import './App.css';
import ImageSlider from './Componets/imageSlider';
import image1 from './img/Image1.webp';
import image2 from './img/images2.jpeg';
import image3 from './img/Image3.webp';


const Images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
];

function App() {
  return (
    <div className="App">
      <ImageSlider
        images={Images}
        parallaxIntensity={0.5} // Adjust as needed
        transitionSpeed={500} // Adjust as needed
      />
    </div>
  );
}

export default App;
