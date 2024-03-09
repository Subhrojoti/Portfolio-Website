import React, { useState, useEffect } from "react";
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAudioLoaded(true);
    }, 777);
  }, []);

  return (
    <>
      {isAudioLoaded ? (
        <>
          <Navbar />
          <Bot />
          <Hero />
          <About />
          <Skills />
          <Hireme />
          <Project />
          <Contact />
          <Footer />
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#00bcfe"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default App;
