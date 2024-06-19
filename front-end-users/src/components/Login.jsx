/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 200) {
          alert(data.msg);
          fetch("http://localhost:3000/api/v1/get-usuario", {
            method: "GET",
            credentials: "include",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.code == 200) {
                localStorage.setItem("user", JSON.stringify(data.data)); /// guardar el valor en el localstore
                navigate("/");
              } else {
                alert("No puede acceder");
              }
            });
        } else {
          alert("Ocurrió un error al loguear el usuario");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (user !== null) {
      fetch("http://localhost:3000/api/v1/google-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token_gg: user.access_token
        }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == 200) {
            alert(data.msg);
            fetch("http://localhost:3000/api/v1/get-usuario", {
              method: "GET",
              credentials: "include",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.code == 200) {
                  localStorage.setItem("user", JSON.stringify(data.data)); /// guardar el valor en el localstore
                  navigate("/");
                } else {
                  alert("No puede acceder");
                }
              });
          } else {
            alert("Ocurrió un error al loguear el usuario");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [user]);

  useEffect(() => {

    if(localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);


  return (
    <div className="container">
      <h1>Login de Usuario</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            Introduce tu email
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      <button className="my-3 btn btn-secondary " onClick={login}>Sign in with Google 🚀 </button>
    </div>
  );
}

export default Login;
