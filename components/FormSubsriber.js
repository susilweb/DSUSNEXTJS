import React, { useRef ,useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const FormSubsriber = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs.sendForm('service_cxxhqoq', 'template_601riyc', form.current, '7Ae4EIVY__86NsTQD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      setTimeout(function() {
        e.target.reset();
        router.push("/thank-you/email-subscriber/");
      }, 500);
      
  };

  return (
    <>
        <div className="main-form-wrper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              required
            />
            <input type="hidden" value={router.asPath} name="url" />
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
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="*Company Name"
              name="company_name"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the&nbsp;
              <Link
                href="/privacy-policy/"
              >
                <a target="_blank">Privacy Policy&nbsp;</a>
              </Link>
              and&nbsp;
              <Link href="/terms-of-use/">
                <a target="_blank">  Terms of Service</a>
              </Link>{" "}
              & give consent to receive creatives, newsletters and other
              updates.
            </label>
          </div>
          <button type="submit" className="btn btn-primary fomr-submit">
            Subscribe Now
          </button>
          <div className={display} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSubsriber;
