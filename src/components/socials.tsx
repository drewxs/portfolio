import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from '@/components';

export const Socials = () => {
  return (
    <div className='socials'>
      <Link className='socials__link' href='https://www.linkedin.com/in/drewxs' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link className='socials__link' href='https://github.com/drewxs' target='_blank'>
        <FontAwesomeIcon icon={faGithubSquare} />
      </Link>
    </div>
  );
};
