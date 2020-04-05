import React from 'react';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutPage />
      <Project />
      <Contact />

    </div>
  );
}

export default App;
