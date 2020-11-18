/* Local Components */
import './App.css';
import Links from './Links.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="description">
          <h1>Zachary Wieand</h1>
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

        <Links />
      </header>
    </div>
  );
}

export default App;
