import React, { useEffect, useState } from "react";
import "./Hero.css";
import images from "../../constants/images";
import  data from "../../constants/data"

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images, setImages] = useState(data.imageEvent);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <div>
        <div className="section-center-home-hero">
          {images.map((image, personIndex) => {
            const { id, imageUrl } = image;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img
                  src={imageUrl}
                  alt="hotel images"
                  className="person-img-home-hero-slider"
                />
              </article>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default Hero;
