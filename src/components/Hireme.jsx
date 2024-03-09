import hireme from "../assets/hireme.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do You have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row  flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Seeking a MERN Stack Developer?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Need a dedicated developer to join your team? That's me! Familiar
            with the MERN stack, I'm eager to contribute and grow with your
            company.
            <br />
            <br />
            <span>What I Offer:</span> <br />
            <span className="font-semibold">Frontend Development:</span> Skilled
            in creating user interfaces with HTML, CSS, JavaScript, React,
            Bootstrap, and Tailwind CSS.
            <br />
            <br />
            <span className="font-semibold">Backend Development: </span>
            Experienced in building scalable applications with Node.js,
            Express.js, and MongoDB.
            <br />
            <br />
            <span className="font-semibold text-lg">
              Ready to Contribute! Eager to learn and make an impact, I'm
              prepared to take on challenges and help your team succeed.
            </span>
          </p>
          <button className="btn-primary mt-10">
            <a href="#contact">Say Hello</a>
          </button>
        </div>
        <img
          src={hireme}
          alt="logo"
          className="lg:h-[38rem] h-80 lg:absolute bottom-0 -right-[7.75rem] object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
