import React, { forwardRef, useState } from 'react';

const Contact = forwardRef(({ id }, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage(`Thank you, ${formData.name}! Your message has been sent.`);
    setTimeout(() => setFormMessage(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit" className="btn contact-btn">
          Send Message
        </button>
        {formMessage && <p id="form-message">{formMessage}</p>}
      </form>
    </section>
  );
});

export default Contact;