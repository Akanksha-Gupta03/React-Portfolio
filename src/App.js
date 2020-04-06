import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      
          <Route exact path={["/","/homepage"]} component={HomePage} />
          <Route exact path="/aboutpage" component={AboutPage} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        
        
        <Footer />
    </div>
    </Router>
  );
}

export default App;
