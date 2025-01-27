import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ThemeSwitcher from './assets/components/Thème';


// Importez vos composants de page ici
import Accueil from './assets/components/home/Accueil';
import Chatbot from './assets/components/bot/Chatbot';
import YoutubeLinks from './assets/components/NosChaines/YouTubes';




const App = () => {
  return (
    <Router>
      <Navbar />
      <div id='afterNav'>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/YouTubes" element={<YoutubeLinks />} />
        </Routes>
      </div>
      <div className="h-screen w-screen fixed z-50">
        <ThemeSwitcher />
      </div>
    </Router>
  );
};

export default App;
