import React from "react";
import aboutImg from "../assets/mypic1.png";
import myCV from "../assets/myCV.pdf";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "4" },
    { text: "Companies Work", count: "00" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hey there! I'm Subhrojoti Nag, a Kolkata-based enthusiast with a
                passion for travel, editing, and coding. Although I didn't start
                in the tech world, my interest gradually shifted towards coding.
                I dedicated myself to learning and honing my skills, resulting
                in the creation of several projects. My toolkit includes HTML,
                CSS, JavaScript, React, MongoDB, Node.js, Express.js, Bootstrap,
                Tailwind CSS, npm, Git, and GitHub. In terms of achievements, I
                secured the 2nd prize in a learning contest on Almabetter and
                earned the Trailblazer Award. I've also clinched victories in
                quiz competitions at Masai School. My main focus lies in
                frontend development, where I love bringing designs to life and
                crafting seamless user experiences. Looking forward to
                connecting and collaborating on exciting projects!
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={myCV} download>
                <button class="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
