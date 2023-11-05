import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{backgroundColor : "white", color: "red", padding: "10px" }}>
          Hello React App FROM version2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps Basic
        </a>
      </header>
    </div>
  );
}

export default App;
