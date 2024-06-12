const Registro = () => {
  return (
    <div className="container">
        <h1>Registro de Usuario</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
           Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Registro;
