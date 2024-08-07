import Link from "next/link";

import { Experience } from "@/types";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { year, title, description, company, url } = experience;

  return (
    <div className="experience-card">
      <h2 className="experience-card__year">{year}</h2>
      <h3 className="experience-card__title">{title}</h3>
      <Link className="experience-card__company" href={url} target="_blank">
        {company}
      </Link>
      <p className="experience-card__description">{description}</p>
    </div>
  );
};
