import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () =>
    toast.success("Message Sent Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = () => {
    toast.error("Something Went Wrong! Try Again Later", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vw8z543", "template_gkyrans", form.current, {
        publicKey: "D6vLO1DPAW4xGLljo",
      })
      .then(
        () => {
          notify();
        },
        (error) => {
          errorNotify();
          console.log("FAILED...", error.text);
        }
      );
  };
  const contact_info = [
    {
      logo: "mail",
      text: "subhrojoti20@gmail.com",
    },
    {
      logo: "logo-whatsapp",
      text: "+91 8918358692",
    },
    {
      logo: "location",
      text: "Location (Kolkata)",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-whit ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg"> Get in touch </p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Your Name" name="user_name" />
            <input
              type="text"
              placeholder="Your Email Address"
              name="user_email"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit" type="submit" value="Send">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
