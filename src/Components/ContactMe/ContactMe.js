import React, { Children, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  let button = localStorage.getItem("clicked");

  const send = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const number = form.user_number.value;
    const message = form.message.value;

    if (name.length > 3 && message.length > 4 && number.length > 6) {
      emailjs
        .sendForm(
          "service_zgg3r9e",
          "template_rxwizkk",
          send.current,
          "Ouyl6nG-O6BcWAykI"
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
      localStorage.setItem("clicked", "true");
      form.reset();
    } else {
      toast.error("Provide a valid information");
    }
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
            <button
              className='btn glass text-right font-bold text-green-400 w-28'
              disabled={button ? true : false}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
