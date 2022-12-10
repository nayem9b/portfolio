import React from "react";

const Card = () => {
  return (
    <div>
      <a href='#' class='block overflow-hidden group'>
        <img
          src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
          alt=''
          class='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
        />

        <div class='relative pt-3 bg-white'>
          <h3 class='text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
            Limited Edition Sports Trainer
          </h3>

          <div class='mt-1.5 flex items-center justify-between text-gray-900'>
            <p class='tracking-wide'>$189.99</p>

            <p class='text-xs tracking-wide uppercase'>6 Colors</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
