
import { useState } from 'react';

const Registro = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistro = () => {

    if(!name || !lastName || !email || !password){
      alert('Todos los campos son obligatorios');
      return;
    }

    //enviamos la petición al backend
    fetch('http://localhost:3000/api/users/crear-usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        }),
      }
    ).then((res) => res.json())
    .then((data) => {
      if(data.error == false)
        {
          alert("El usuario fue registrado correctamente")
        } else {
          alert("Ocurrió un error al registrar el usuario")
        }
      
      console.log(data);  // respuesta del backend
    })
    .catch((error) => {
      console.error('Error:', error)})
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
  }


  return (
    <div className="container">
        <h1>Registro de Usuario</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
           Nombre
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div id="nameHelp" className="form-text">
           Ingresa tu nombre
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputlastName1" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputlastName1"
            aria-describedby="lastNameHelp"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div id="lastNameHelp" className="form-text">
            Ingresa tu apellido
          </div>
        </div>
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
            Ingresa tu correo electrónico
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
        onClick={handleRegistro}
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default Registro;
