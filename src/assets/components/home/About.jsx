import React from "react";

const About = () => {
  return (
    <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
      {/* Gradient en arrière-plan couvrant tout l'écran */}
      <div
        className="absolute inset-0 bg-gradient-to-tl from-red-950 via-transparent to-blue-950 opacity-50"
        aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Titre */}
        <h2 className="sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-blue-500 mb-12 mt-8">
          QUI SOMMES-NOUS ?
        </h2>

        {/* Contenu */}
        <div className="space-y-6">
          {[
            "Sauvons l’enfance en difficulté est un organisme à but non lucratif qui prend en charge 5 types d’enfants en difficulté : ceux atteints d’une anomalie de comportement, de communication, d’ordre intellectuel, d’ordre physique ou d’anomalie multiple.",
            "L’organisme offre son aide de soutien, aide éducative et aide thérapeutique aux enfants en difficulté âgés de 0 à 21 ans.",
            "Notre objectif est d’offrir aux enfants en difficulté un état de bien-être agréable en satisfaisant leurs besoins essentiels afin qu’ils puissent mener une vie de qualité et trouver la sérénité.",
            "Nous utilisons une succession de procédés pour mener nos actions : identifier un enfant en difficulté atteint d’une anomalie, procéder à la documentation, et finalement résoudre ses besoins essentiels pour atteindre nos 5 grands résultats.",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-gray-200 sm:text-base md:text-xl lg:text-2xl dark:bg-gray-800 text-gray-950 dark:text-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Slogan */}
        <div className="mt-10 bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-950 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-blue-500">
            NOTRE SLOGAN
          </h3>
          <p className="italic font-semibold sm:text-base md:text-xl lg:text-2xl">
            « Plus on aide un enfant en difficulté, plus il est heureux !<br />
            Plus un enfant en difficulté est heureux, plus sa famille est
            heureuse.<br />
            Plus les familles d’enfants en difficulté sont heureuses, plus tous
            les intervenants sont heureux. »
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
