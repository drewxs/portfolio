import { projects } from "@/data";

import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section className="home section projects">
      <div className="container">
        <h1 className="projects-title">Projects</h1>
        <div className="project-list">
          {projects?.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
