import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from '@/components';
import { socials } from '@/data';

const { github, linkedin, medium } = socials;

export const Socials = () => {
  return (
    <div className='socials'>
      <Link className='socials__link' href={github} target='_blank'>
        <FontAwesomeIcon icon={faGithubSquare} />
      </Link>
      <Link className='socials__link' href={linkedin} target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link className='socials__link' href={medium} target='_blank'>
        <FontAwesomeIcon icon={faMedium} />
      </Link>
    </div>
  );
};
