/* eslint-disable react/prop-types */
import { Card, Image } from "@nextui-org/react";

const SkillCard = ({ technology }) => {
  return (
    <div>
      <div className=" w-16 h-16 lg:w-24 lg:h-24" key={technology.name}>
        <Card className="col-span-12 sm:col-span-4 ">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-16 h-16 lg:w-24 lg:h-24 object-cover bg-white"
            src={technology.icon}
          />
        </Card>
      </div>
    </div>
  );
};

export default SkillCard;
