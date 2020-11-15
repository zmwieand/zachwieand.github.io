/* Bootstrap components */
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Links() {
  return (
    <ButtonGroup>
      <Button
        variant="dark"
        href="https://github.com/zmwieand"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Button>{' '}
    
      <Button
        variant="dark"
        href="https://zachwieand.com/Resume/zach_wieand_resume.pdf"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFileAlt} size="2x" />
      </Button>{' '}

      <Button
        variant="dark"
        href="mailto:zmwieand@gmail.com"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </Button>{' '}

      <Button
        variant="dark"
        href="https://www.linkedin.com/in/zachary-wieand-b338828a/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </Button>{' '}
    </ButtonGroup>
  )
}

export default Links;
