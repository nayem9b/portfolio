import React, { Children, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const send = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const number = form.user_number.value;
    const message = form.message.value;
    console.log(name, email, number, message);
    console.log(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      process.env.REACT_APP_YOUR_PUBLIC_KEY
    );
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        send.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Thank you for contacting me. \n I will communicate soon");
    form.reset();
  };
  return (
    <div>
      <div
        class="bg-[url('https://images.pexels.com/photos/8715123/pexels-photo-8715123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white bg-cover "
        id='contact_me'>
        <h2 class='text-4xl '>Contact me</h2>
        <a href='mailto:razwanniam1@gmail.com' className='hover:text-green-400'>
          razwanniam1@gmail.com
        </a>
        <h1 className='mb-10'>+880 1755 299-400</h1>
        <form ref={send} onSubmit={handleSubmit}>
          <div className='grid grid-rows-4 gap-y-1'>
            <input
              type='text'
              placeholder='Name'
              name='user_name'
              className='input input-bordered input-warning w-96 max-w-sm'
            />
            <input
              type='text'
              placeholder='Email'
              name='user_email'
              className='input input-bordered input-warning w-96 max-w-sm'
            />
            <input
              type='text'
              placeholder='Phone Number'
              name='user_number'
              className='input input-bordered input-warning w-96 max-w-sm'
            />
            <textarea
              className='textarea textarea-warning w-96 max-w-sm'
              name='message'
              placeholder='Message'></textarea>
            <button className='btn glass text-right font-bold text-green-400 w-28'>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
