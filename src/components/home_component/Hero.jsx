import React, { useState } from "react";

import HeroImg from "/assets/heroType.png";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { id: 0, src_bg: "./assets/background_img/cover1.png", src_crd: "./assets/img_card/background1.png", alt: "Image 1", style: "absolute  inset-0 bg-cover bg-center transition-all duration-500 ease-in-out " },
    { id: 1, src_bg: "./assets/background_img/cover2.png", src_crd: "./assets/img_card/background2.png", alt: "Image 2", style: "absolute  inset-0 bg-cover bg-left lg:bg-center transition-all duration-500 ease-in-out " },
    { id: 2, src_bg: "./assets/background_img/cover3.png", src_crd: "./assets/img_card/background3.png", alt: "Image 3", style: "absolute  inset-0 bg-cover bg-center transition-all duration-500 ease-in-out " },
  ];

  const handleCardClick = (id) => {
    setSelectedImage(id);
  };

  return (
    <section id="home" className="relative h-screen lg:h-screen w-full lg:flex grid ">
      {/* Background Image */}
      <div className={`${images[selectedImage].style}`} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #00D1FF 100%),url(${images[selectedImage].src_bg})` }}></div>

      {/* Logo Travel */}
      <div className="flex w-full h-full  lg:w-1/2 lg:h-full z-0 lg:items-end lg:justify-end">
        <div className="lg:w-[640px] lg:h-[306px] w-[300px] h-[209px] lg:m-8 flex-col mt-36 ml-10 lg:mt-0 lg:ml-8 ">
          <img src={HeroImg} alt="" />
          <a href="#tentangprogram" className="bg-[#FFC73C] text-white px-5 py-2 rounded-full mt-5 w-[200px] flex hover:bg-[#c4a75d] hover:shadow-lg">
            TENTANG PROGRAM
          </a>
        </div>
      </div>
      {/* Card Container */}
      <div className="flex w-full lg:w-1/2 lg:h-full  z-0  justify-center items-start lg:items-end p-8 overflow-x-hidden ">
        <div className=" z-0 flex space-x-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative w-[110px] h-[160px]  lg:w-[200px] lg:h-[300px] rounded-sm lg:rounded-3xl   transition-transform duration-500 ease-in-out cursor-pointer ${
                selectedImage === image.id ? "transform translate-x-0 scale-105" : ""
              }`}
              onClick={() => handleCardClick(image.id)}
            >
              <img src={image.src_crd} className="w-full h-full object-cover shadow-lg shadow-white rounded-xl lg:rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
