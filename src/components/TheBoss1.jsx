import { useState } from "react";
import Spinner from "./Spinner";
import "./TheBoss.css";

const TheBoss1 = () => {
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://fakestoreapi.com/products";
  const userName = "Gasti";
  
  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
        setMessage("");
    }, 2000);
  };
  
  const handleGetProducts = async () => {
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        
        const res = await fetch(BASE_URL);
        
        if(!res.ok){
            throw new Error("Error al solicitar productos.");
        }
        
        const data = await res.json();
        setProducts(data);

    } catch (error) {
        setMessage("Error al recibir los datos.");
    }

    finally {
        setLoading(false);
    }
    
  }

  const handlePost = async (productId) => {

    const newPost = {
        userName: userName,
        productId: productId
    }

    try {
        
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newPost)
        });

        if(!res.ok){
            throw new Error("Error al realizar la petición.");
        }

        const data = await res.json();
        showMessage("Post enviado con éxito!");
        console.log(data);
        console.log(newPost);

    } catch (error) {
        setMessage("Error al realizar el post.");
    }
  }
  
    return (
    <>
        {message && <p className="message">{message}</p>}
        {loading && <Spinner color="red"/>}
        
        <button onClick={handleGetProducts}>
            Mostrar productos
        </button>

        <div className="products">
            {products.slice(0, 12).map((product) => (
                <div key={product.id} className="card">
                    <div>
                        <h3>{product.title}</h3>
                        <img src={product.image}/>
                        <button onClick={() => handlePost(product.id)}>
                            Comprar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default TheBoss1