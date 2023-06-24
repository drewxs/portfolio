import { ExperienceCard } from '@/components';
import { experience } from '@/data';

export const Experience = () => {
  return (
    <section className='home section experience'>
      <div className='container'>
        <h1 className='experience-title'>Timeline</h1>
        <div className='experience-list'>
          {experience?.map((exp) => (
            <ExperienceCard exp={exp} key={exp._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
