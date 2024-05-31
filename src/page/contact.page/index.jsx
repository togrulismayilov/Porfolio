import React from "react";
import "./index.scss";
const Contact = () => {
  return (
    <div className="intohead">
      <div className="intostart">
        <h3>Contact Me</h3>
        <p>
          I would love to hear from you! Whether you have a question about my
          projects, want to discuss a potential collaboration, or just want to
          say hi, feel free to reach out. You can contact me through the
          following channels:
        </p>
      </div>
      <div className="intoinfo">
        <div>
          <h4>Have Question</h4>
          <p className="intobold">İ am here to help you</p>
          <p className="intogray">Email Me At Togrul.İsmayilli@Mail.Com</p>
        </div>
        <div>
          <h4>Current Location</h4>
          <p className="intobold">Baku , Azerbaijan</p>
          <p className="intogray">Serving Clients Worldwide</p>
        </div>
        <div className="intoinp">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="intonorm"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="intonorm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="intonorm"
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="intoaut"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
