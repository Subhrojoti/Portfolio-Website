import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "CryptoCurrency Dashboard",
      github_link: "https://github.com/Subhrojoti/CryptoCurrency-Dashboard",
      live_link: "https://cryptonexhub.netlify.app/",
    },
    {
      img: project2,
      name: "Get Youtube Subscriber",
      github_link: "https://github.com/Subhrojoti/Get-YouTube-Subscriber",
      live_link: "https://get-you-tube-subscriber-rho.vercel.app/",
    },
    {
      img: project3,
      name: "Weather App",
      github_link: "https://github.com/Subhrojoti/Weather-App",
      live_link: "https://atmosphere.netlify.app/",
    },
    {
      img: project4,
      name: "PortFolio Website",
      github_link: "https://github.com/Subhrojoti/Portfolio-Website",
      live_link: "https://subhrojoti-portfolio.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center ">
        <div className=" w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg w-full"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
