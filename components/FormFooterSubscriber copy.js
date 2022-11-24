import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { useHistory } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormFooterSubscriber = () => {
  // const [display, setDisplay] = useState("const2");
  // const history = useHistory();
  // function sendEmail(e) {
  //   setDisplay("spinner-border");
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_z1ba46f",
  //       "template_1zmk23c",
  //       e.target,
  //       "aB1cszau6H32ivpeD"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       alert("success");

  //       history.push("/thank-you/email-subscriber/");
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <>
      <div className="main-form-wrper">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="* Work Email"
              name="email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary fomr-submit">
            Subscribe Now
          </button>
          <div className="" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFooterSubscriber;
