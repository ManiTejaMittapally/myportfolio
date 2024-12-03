import React from 'react'
import './contact.css'
import LinkedinIcon from '../../Assets/linkedin.png'



export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86f8a4c4-b472-46f7-96fe-164a28939475");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      alert("Email sent successfully");
    }
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form onSubmit = {onSubmit}className='contactForm' >
                <input  type='text' className='name' placeholder='Your Name' name='name' />
                <input  type='email' className='email' placeholder='Your Email' name='email' />
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type= 'submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                <a href="https://www.linkedin.com/in/mani-teja-reddy-mittapally" target="_blank" rel="noopener noreferrer">
                      <img src={LinkedinIcon} alt='LinkedIn' className='link' />
                    </a>
                </div>
            </form>
        </div>

    </section>
  )
}
