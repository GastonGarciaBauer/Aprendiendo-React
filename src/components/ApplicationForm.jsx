import { useState } from 'react';
import "./ApplicationForm.css"
import Spinner from './Spinner';
import { PostService } from '../services/postService';

const ApplicationForm = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
    
  const handleGetPosts = async () => {
      
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {

      const dataPosts = await PostService.getAll();
      console.log("Datos recibidos con éxito!", dataPosts);
      setPosts(dataPosts);
  
    } catch (error) {
      setMessage("Se ha producido un error al realizar la petición.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault(); // Primero prevenimos el refresco automático del form

      const newPost = { // creamos el objeto a postear con title, body y userId (como lo pide el ejercicio)
        title: title,
        body: content,
        userId: 1
      };

      try {

        const data = await PostService.create(newPost);
        console.log("Post creado con éxito", data);
        setTitle("");
        setContent("");
        
      } catch (error) {
        setMessage("Se ha producido un error al realizar el post.");
        console.log(error);
      }
      
  };
  

  return (
    <>
      {message && <p>{message}</p>}

      <form className="post-form" onSubmit={handleSubmit}>
          
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Título"
          />
          <textarea 
            placeholder="Contenido" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Publicar</button>
      </form>

      <button onClick={handleGetPosts}>
        Mostrar posts
      </button>

      <div>
        {loading && <Spinner color="black" />}
        {posts.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApplicationForm