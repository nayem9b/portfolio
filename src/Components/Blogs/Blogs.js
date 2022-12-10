import React from "react";
import Lottie from "lottie-react";
import comingSoon from "../../images/113096-coming-soon.json";
const Blogs = () => {
  return (
    <div>
      <Lottie className='w-5/6' animationData={comingSoon} loop={true} />
    </div>
  );
};

export default Blogs;
