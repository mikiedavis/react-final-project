import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edureka AWS Final Project
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://aws.amazon.com/console/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to design an AWS network solution
        </a>
      </header>
    </div>
  );
}

export default App;
