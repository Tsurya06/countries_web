import React from 'react';
import '../App.css';

export const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    event.currentTarget.reset();
  };

  return (
    <section className="contact-container">
      <h2 className="contact-us">Contact Us</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="contact-form-input"
            placeholder="Name"
            name="username"
            autoComplete="off"
            required
          />
          <input
            type="email"
            className="contact-form-input"
            placeholder="Email Address"
            name="emailAddress"
            autoComplete="off"
            required
          />
          <textarea
            className="contact-form-textarea"
            placeholder="Message"
            name="message"
            rows={5}
            required
            autoComplete="off"
          ></textarea>
          <div className="contact-form-checkbox">
            <input type="checkbox" id="subscribe" name="subscribe" />
            <label htmlFor="subscribe">Subscribe to our newsletter</label>
          </div>
          <button type="submit" className="contact-form-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;