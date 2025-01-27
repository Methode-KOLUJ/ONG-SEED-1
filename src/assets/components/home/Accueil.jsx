import React from "react";
import Slider from "./Slider";
import About from "./About";
import Footer from "../footer/footer"


const Accueil = () => {
  const slides = [
    {
      image: "/Home/SEED ONG.png",
      title: "ONG SEED",
      description: "Devenez membre Bénévole ou Donateur au sein de l'ONG SEED !",
      cta: "REJOINDRE L'ONG SEED",
      link: "/",
    },
    {
      image: "/Home/BOUTIQUE.jpeg",
      title: "BOUTIQUE OFFICIELLE",
      description: "Achetez des articles pour soutenir la mission de SEED.",
      cta: "VISITER LA BOUTIQUE",
      link: "/",
    },
    {
      image: "/Home/SEED-FILM.jpeg",
      title: "SEED FILMS",
      description: "SEED oeuvre dans la production des Films éducatifs.",
      cta: "SUIVRE NOS FILMS",
      link: "/",
    },
    {
      image: "/Home/YouTube.jpg",
      title: "CHAINES YOUTUBE",
      description: "L'ONG SEED détiens plusieurs chaînes YouTube, suivez-les !",
      cta: "SUIVRE NOS CHAINES",
      link: "/YouTubes",
    },
  ];

  return (
    <>
      <div className="dark:bg-black">
      <div
        className="absolute inset-0 bg-gradient-to-tl from-blue-900 via-transparent to-red-900 opacity-50"
        aria-hidden="true"></div>
       <div className="bg-white lg:py-2 sm:py-0 md:py-0 flex items-center justify-center dark:bg-black">
      <Slider slides={slides} />
    </div>
        <div>
          <About />
        </div>
        <div>
          <Footer/> 
        </div>
    </div>
    
     </> 
  );
};

export default Accueil;
