/* eslint-disable no-unused-vars */
import React from "react";
import { testimonials } from "../constants";
import Certificationcard from "./Certificationcard";

const Feedbacks = () => {
  return (
    <div>
      <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-6">
        Certification
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  lg:ml-40 gap-y-10 mx-5 ">
        {testimonials?.map((testimonial) => (
          <Certificationcard
            key={1}
            testimonial={testimonial}
          ></Certificationcard>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
