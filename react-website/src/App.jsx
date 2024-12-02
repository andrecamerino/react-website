import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="What We Offer"/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus />
        <Title subtitle="Testimonials" title="What Student Says"/>
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch"/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
