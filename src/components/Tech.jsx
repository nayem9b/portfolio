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

// Reusable skill section component with modern glassmorphism design
const SkillSection = ({ title, skills, icon }) => (
  <div className="mb-8 last:mb-0">
    {/* Section card with glassmorphism effect */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6 lg:p-8 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/5">
      {/* Subtle gradient orb in background */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-3xl" />

      {/* Section title */}
      <div className="flex items-center gap-3 mb-6">
       
        <h2 className="text-white text-xl lg:text-2xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4" />
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
        {skills.map((technology) => (
          <SkillCard
            technology={technology}
            key={technology.name || technology}
          />
        ))}
      </div>
    </div>
  </div>
);

const Tech = () => {
  // Skill categories with icons for visual appeal
  const skillCategories = [
    { title: "Cloud & DevOps", skills: cloudDevOpsTestting, icon: "☁️" },
    { title: "Databases & ORM", skills: databasesORM, icon: "🗄️" },
    { title: "Languages", skills: languages, icon: "💻" },
    { title: "Frontend", skills: frontEnd, icon: "🎨" },
    { title: "Backend", skills: Backend, icon: "⚙️" },
    { title: "Others", skills: others, icon: "🛠️" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main heading with enhanced styling */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-7xl font-black mb-4">
          My Skill Set
        </h1>
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </div>

      {/* Skills sections */}
      <div className="space-y-6">
        {skillCategories.map(({ title, skills, icon }) => (
          <SkillSection key={title} title={title} skills={skills} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
