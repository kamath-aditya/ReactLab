import {useState} from 'react'

const images = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", 
  "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"
];

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <img src={images[currentImage]} alt="Image" height={400}/>
      <div>
        <button onClick={previousImage} >Previous</button>
        <button onClick={nextImage} >Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;