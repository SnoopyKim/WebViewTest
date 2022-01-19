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
    if (token === undefined || refreshToken === undefined) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        window.Android.onLogin(token, refreshToken);
      }, 2000);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.Android.onLogin(
        "TOKEN_VALUE_EXAMPLE",
        "REFRESH_TOKEN_VALUE_EXAMPLE"
      );
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type={"email"}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            outline: "none",
          }}
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            outline: "none",
          }}
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type={"button"}
          value={"로그인"}
          style={{
            width: 320,
            height: 50,
            borderRadius: 10,
            marginTop: 20,
            fontSize: 16,
            fontWeight: "bold",
            letterSpacing: 2,
            outline: "none",
            border: "none",
            backgroundColor: "steelblue",
            color: "white",
          }}
          onClick={login}
        />
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
