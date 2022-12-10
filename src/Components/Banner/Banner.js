import React from "react";
import Lottie from "lottie-react";
import developer from "../../images/90497-software-development.json";
const Banner = () => {
  return (
    <div className='grid grid-rows-2'>
      <Lottie className='' animationData={developer} loop={true} />
    </div>
  );
};

export default Banner;
