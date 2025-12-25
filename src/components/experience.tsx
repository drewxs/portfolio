import { experience } from "@/data";

import { ExperienceCard } from "./experience-card";

export const Experience = () => {
  return (
    <section className="home section experience">
      <div className="container">
        <h1 className="experience-title">Timeline</h1>
        <div className="experience-list">
          {experience?.map((exp) => (
            <ExperienceCard experience={exp} key={exp._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
