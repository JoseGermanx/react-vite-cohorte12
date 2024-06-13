import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {

    fetch('http://localhost:3000/api/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    ).then((res) => res.json())
    .then((data) => {
      if(data.error == false)
        {
          alert("El usuario fue logueado correctamente")
          navigate('/')

        } else {
          alert("Ocurrió un error al loguear el usuario")
        }
      
      console.log(data);  // respuesta del backend
    })
    .catch((error) => {
      console.error('Error:', error)})
  }

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
        
        <button
        type="button"
        className="btn btn-primary"
        onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
