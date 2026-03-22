import { useState } from "react";
import "./ApplicationForm.css";
import "./Spinner";
import Spinner from "./Spinner";

const ApplicationForm1 = () => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const showMessage = (text) => {
        setMessage(text);

        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

    const handleGetPosts = async () => {
        
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            
            const res = await fetch(BASE_URL);
            
            if(!res.ok){
                throw new Error("No se pudo realizar la petición.")
            }

            const data = await res.json();
            setPosts(data);

        } catch (error) {
            setMessage("Error al realizar la petición.");
        } finally {
            setLoading(false);
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title: title,
            body: content,
            userId: 1
        }

        try {
            
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(newPost)
            });

            if(!res.ok){
                throw new Error("Error al realizar el post.");
            }

            const data = await res.json();
            showMessage("Post realizado con éxito!");
            
            setTitle("");
            setContent("");
            
        } catch (error) {
            showMessage("Error al realizar el post.");
        }
    }
  
    return (
        <>
            {message && <p className="message">{message}</p>}

            <form className="post-form" onSubmit={handleSubmit}>

                <input 
                type="text" 
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                placeholder="Título"
                />

                <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Contenido"
                />

                <button type="submit">
                    Publicar
                </button>

            </form>

            <button onClick={handleGetPosts}>
                Mostrar posts
            </button>

            <div>
                {loading && <Spinner color="green"/>}

                {posts.slice(0, 10).map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        
        </>
    )
}

export default ApplicationForm1