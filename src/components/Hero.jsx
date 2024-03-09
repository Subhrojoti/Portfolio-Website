import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import myPic from "../assets/mypic.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Video Editor", "Gamer", "Youtuber"],
    loop: {},
    typeSpeed: 120,
  });
  const social_media = [
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/subhrojoti-nag-459204283",
    },
    {
      logo: "logo-github",
      link: "https://github.com/Subhrojoti",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={myPic} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-semibold">
            <span className="text-cyan-600 md:text-6xl text-5xl ">
              Hello!
              <br />
            </span>
            My Name is <span>Subhrojoti Nag</span>
          </h1>
          <h3 className="md:text-3xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            I am a <span className="text-cyan-600">{text}</span>
            <Cursor />
          </h3>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERN Stack Developer
          </h4>
          <button className="btn-primary mt-8">
            <a href="#contact">Contact Me</a>
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={icon.link} target="_blank">
                  <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
