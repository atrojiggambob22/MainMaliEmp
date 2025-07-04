import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './RoyalDecreeForm.css'; // Add CSS file separately

const RoyalDecreeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_t48j7du',
      'template_6w93lpj',
      formData,
      'mjZIQlKSZlPoGhBiw'
    )
    .then((result) => {
        alert('Royal Decree Sent to the Palace! 👑');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
        alert('Failed to deliver decree. Try again later.');
        console.error(error.text);
    });
  };

  return (
    <form className="royal-form" onSubmit={sendEmail}>
      <h2>Send Royal Decree</h2>
      <p>Your message shall reach the Emperor's court</p>

      <div className="form-row">
        <div>
          <label>Noble Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label>Royal Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <label>Subject of Decree</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Brief subject"
        required
      />

      <label>Your Royal Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message to the royal court..."
        required
      />

      <button type="submit">Send to Palace 👑</button>
    </form>
  );
};

export default RoyalDecreeForm;