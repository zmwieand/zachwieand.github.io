import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Zachary Wieand
        </h1>
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
        </p>
      </header>
    </div>
  );
}

export default App;
