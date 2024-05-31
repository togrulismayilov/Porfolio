import React from "react";
import "./index.scss";
const Contact = () => {
  return (
    <div id="head">
      <div id="start">
        <h3>Contact Me</h3>
        <p>
          I would love to hear from you! Whether you have a question about my
          projects, want to discuss a potential collaboration, or just want to
          say hi, feel free to reach out. You can contact me through the
          following channels:
        </p>
      </div>
      <div id="info">
        <div>
          <h4>Have Question</h4>
          <p className="bold">İ am here to help you</p>
          <p className="gray">Email Me At Togrul.İsmayilli@Mail.Com</p>
        </div>
        <div>
          <h4>Current Location</h4>
          <p className="bold">Baku , Azerbaijan</p>
          <p className="gray">Serving Clients Worldwide</p>
        </div>
        <div id="inp">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="norm"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="norm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="norm"
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="aut"
            />
          </form>
          <button>
            <a href="#">Send Message</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
