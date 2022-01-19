import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [token, refreshToken] = window.location.search
    .substring(1)
    .split("&")
    .map((v) => v.split("=")[1]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (token == undefined || refreshToken == undefined) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        const token = "token!";
        const refreshToken = "refreshToken!";
        window.Android.onLogin(token, refreshToken);
      }, 2000);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#000000CC",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}

export default App;
