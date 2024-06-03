
import { useState, useEffect } from 'react'
import CardPost from './CardPost';


const Efectos = () => {
    
    // usesState para manejar el estado los posts. Almacenamos el listado posts

    const [posts, setPosts] = useState([]); // useState para manejar el estado de los posts
    
    // useEffect para hacer la petición a la API y almacenar los posts en el estado

    useEffect(() => {

        // hacer la petición a la API
        // fetch
        // GET perticion de recursos sin modificar
        // retona una promesa -->> porque consulta a un recurso externo
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then((response) =>{
            if(response.status === 200){
                return response.json()
            }
        })
        .then((data) => {
            setPosts(data) /// se llena es estado con el listado posts
        })
        .catch((err) => {
            console.log(err)
        })
       

        // POST crear un recurso nuevo
        // PUT actualizar un recurso
        // DELETE eliminar un recurso

    }, [])





    // renderizar la lista de post

  return (
    <div className='container my-5'>{
        posts.map((post, index) => {
            return (
                <>
                <CardPost
                key={index}
                id={post.id}
                title={post.title}
                body={post.body}
                />
                </>
            )
        })
    }</div>
  )
}

export default Efectos