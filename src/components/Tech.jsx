import { SectionWrapper } from "../hoc";
import {
  Backend,
  cloudDevOpsTestting,
  databasesORM,
  frontEnd,
  languages,
  others,
} from "../constants";
import SkillCard from "./SkillCard";

const Tech = () => {
  return (
    <div>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl font-black text-center my-16">
        My Skill Set
      </h1>
      <h1 className="text-white text-2xl font-semibold lg:hidden lg:mr-5 text-center mb-8">
        Cloud Devops & Testing :
      </h1>
      <div className="flex">
        <div className="hidden lg:block w-60">
          <h1 className="text-white text-2xl font-semibold hidden lg:block mr-5">
            Cloud Devops & Testing :
          </h1>
        </div>

        <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
          {cloudDevOpsTestting.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-white text-2xl font-semibold lg:hidden lg:mr-5 text-center mb-8 my-6">
          Databases & ORM :
        </h1>
        <div className="flex">
          <div className="hidden lg:block w-60">
            <h1 className="text-white text-2xl font-semibold hidden lg:block mr-5">
              Databases & ORM :
            </h1>
          </div>

          <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
            {databasesORM.map((technology) => (
              <SkillCard technology={technology} key={technology} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-white text-2xl font-semibold lg:hidden mr-5 text-center mb-8 my-6">
          Languages :
        </h1>
        <div className="flex">
          <div className="hidden lg:block w-60">
            <h1 className="text-white text-2xl font-semibold hidden lg:block  lg:mr-5">
              Languages :
            </h1>
          </div>

          <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
            {languages.map((technology) => (
              <SkillCard technology={technology} key={technology} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-0 lg:my-8">
        <h1 className="text-white text-2xl font-semibold lg:hidden mr-5 text-center mb-8 my-6">
          Front End Techs :
        </h1>
        <div className="flex">
          <div className="hidden lg:block w-60">
            <h1 className="text-white text-2xl font-semibold hidden  lg:block mr-5">
              Front End Techs :
            </h1>
          </div>

          <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
            {frontEnd.map((technology) => (
              <SkillCard technology={technology} key={technology} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-0 lg:my-8">
        <h1 className="text-white text-2xl font-semibold lg:hidden lg:mr-5 text-center mb-8 my-6">
          Back End Techs :
        </h1>
        <div className="flex">
          <div className="hidden lg:block w-60">
            <h1 className="text-white text-2xl font-semibold hidden lg:block mr-5">
              Back End Techs :
            </h1>
          </div>

          <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
            {Backend.map((technology) => (
              <SkillCard technology={technology} key={technology} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-2xl font-semibold lg:hidden mr-5 text-center mb-8 my-6">
          Others :
        </h1>
        <div className="flex">
          <div className="hidden lg:block w-60">
            <h1 className="text-white text-2xl font-semibold hidden lg:block mr-5">
              Others :
            </h1>
          </div>

          <div className="grid lg:grid-cols-8 grid-cols-3 gap-8 lg:gap-20 mx-auto">
            {others.map((technology) => (
              <SkillCard technology={technology} key={technology} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <div className="w-60">
          <h1 className="text-white text-2xl font-semibold items-center mt-10 mr-6">
            Languages :
          </h1>
        </div>

        <div className="grid grid-cols-8 gap-20 mt-8">
          {languages.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="w-60">
          <h1 className="text-white text-2xl font-semibold items-center mt-10">
            Front End Techs :
          </h1>
        </div>

        <div className="grid grid-cols-8 gap-20 mt-8">
          {frontEnd.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="w-60">
          <h1 className="text-white text-2xl font-semibold items-center mt-10">
            Back End Techs :
          </h1>
        </div>

        <div className="grid grid-cols-8 gap-20 mt-8">
          {Backend.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="w-60">
          <h1 className="text-white text-2xl font-semibold items-center mt-10">
            Misc :
          </h1>
        </div>

        <div className="grid grid-cols-8 gap-20 mt-8">
          {others.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
