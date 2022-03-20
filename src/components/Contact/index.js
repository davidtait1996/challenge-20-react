import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div id = "form-id" className='d-flex justify-content-center flex-nowrap mt-4'>
      <section id="form-area" className='col-md-6 '>
        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" className='d-flex-inline justify-content-start' onSubmit={handleSubmit}>
          <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    </div>

  );
}

export default Contact;
