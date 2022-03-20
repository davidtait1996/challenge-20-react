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
    <div className=''>
      <div id = "form-id" className='d-flex justify-content-center flex-nowrap mt-4'>
        <section id="form-area" className=' '>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" className='d-flex-inline justify-content-start' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center align-items-center flex-nowrap my-2'>
              <input 
                type="text" 
                name="name" 
                defaultValue={name} 
                onBlur={handleChange}
                placeholder="Name"
                className='text-center'
              />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
              <input 
                type="email" 
                name="email" 
                defaultValue={email} 
                onBlur={handleChange}
                placeholder="Email"
                className='text-center'
              />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
              <textarea 
                name="message" 
                rows="5" 
                defaultValue={message} 
                onBlur={handleChange}
                placeholder="Message"
                className='text-center'
              />
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
    </div>
  );
}

export default Contact;
