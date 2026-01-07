/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";

const SkillCard = ({ technology }) => {
  return (
    <div className="group flex flex-col items-center gap-2 cursor-pointer">
      {/* Icon container with hover effects */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-2.5 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/25 group-hover:shadow-lg group-hover:shadow-purple-500/20">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-teal-500/0 group-hover:from-purple-500/10 group-hover:to-teal-500/10 transition-all duration-300" />

        <Image
          removeWrapper
          alt={technology?.name || "Technology"}
          className="relative z-10 w-full h-full object-contain drop-shadow-sm"
          src={technology?.icon}
        />
      </div>

      {/* Technology name */}
      <span className="text-[10px] sm:text-xs text-gray-400 font-medium text-center leading-tight group-hover:text-white transition-colors duration-300 max-w-[70px] truncate">
        {technology?.name}
      </span>
    </div>
  );
};

export default SkillCard;
