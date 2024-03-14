import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name: " />
        <label>Email</label>
        <input type="email" placeholder="Enter your Email: " />
        <label>Message</label>
        <textarea rows={6} placeholder="Type your message here: " />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
