import { ReactElement } from 'react';

import { ExperienceCard } from 'components';
import { experience } from 'data';

/**
 * Section for showcasing featured projects.
 *
 * @param projects - Array of GitHub repository objects
 */
export const Experience = (): ReactElement => {
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
