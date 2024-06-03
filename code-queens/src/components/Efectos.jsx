import { useState, useEffect } from "react";
// import CardPost from './CardPost';
import TodoCard from "./TodoCard";

const Efectos = () => {
  // usesState para manejar el estado los posts. Almacenamos el listado posts

  const [posts, setPosts] = useState([]); // useState para manejar el estado de los posts
  const [filtroCompleted, setFiltroCompleted] = useState(true); // useState para manejar el estado del filtro [true, false

  // useEffect para hacer la petición a la API y almacenar los posts en el estado

  useEffect(() => {
    // hacer la petición a la API
    // fetch
    // GET perticion de recursos sin modificar
    // retona una promesa -->> porque consulta a un recurso externo
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setPosts(data); /// se llena es estado con el listado posts
      })
      .catch((err) => {
        console.log(err);
      });

    // POST crear un recurso nuevo
    // PUT actualizar un recurso
    // DELETE eliminar un recurso
  }, []);

  // renderizar la lista de post

  // filtrado del array filter

  return (
    <>
    <button onClick={() => setFiltroCompleted(true)}>Mostrar Completados</button>
    <button onClick={() => setFiltroCompleted(false)}>Mostrar Incompletos</button>
      <div className="container my-5">
        {posts
          .filter((todo) => todo.completed === filtroCompleted)
          .map((todo, index) => {
            return (
              <div key={index}>
                <TodoCard title={todo.title} completed={todo.completed} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Efectos;
