/* Bootstrap components */
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* Local Components */
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zachary Wieand</h1>
        <div className="description">
          <p>
            Site Reliability Engineer at&nbsp;
            <a
              className="App-link"
              href="https://acvauctions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACV Auctions
            </a>
            . Passionate about cloud infrastructure, bleeding edge technology,
            and Brazilian Jiu Jitsu.
          </p>
        </div>

        <br/>

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
      </header>
    </div>
  );
}

export default App;
