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
      <div className="flex">
        <h1 className="text-white items-center mt-10">Clouds</h1>
        <div className="grid grid-cols-8 gap-20">
          {cloudDevOpsTestting.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>

      <div>
        <h1>Database & ORM</h1>
        <div className="grid grid-cols-8 gap-20">
          {databasesORM.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
      <div>
        <h1>Languages</h1>
        <div className="grid grid-cols-8 gap-20">
          {languages.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
      <div>
        <h1>Front End Techs</h1>
        <div className="grid grid-cols-8 gap-20">
          {frontEnd.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
      <div>
        <h1>Back End Techs</h1>
        <div className="grid grid-cols-8 gap-20">
          {Backend.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
      <div>
        <h1>Others</h1>
        <div className="grid grid-cols-8 gap-20">
          {others.map((technology) => (
            <SkillCard technology={technology} key={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
