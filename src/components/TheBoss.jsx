import { useState } from "react";
import Spinner from "./Spinner";
import "./TheBoss.css";

const TheBoss = () => {
  
    const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const BASE_URL = "https://fakestoreapi.com/products";
    const userName = "Gasti";

    const handleGetProducts = async () => {
        
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        try {
            
            const res = await fetch(BASE_URL);
            
            if(!res.ok){
                throw new Error("Algo salió mal :(");
            }

            const data = await res.json();
            console.log(data);
            setProducts(data);

        } catch (error) {
            setMessage("Error al realizar la petición.");
        } finally {
            setLoading(false);
        }
    }

    const handlePost = async (productId) => {
    
        const newPost = {
            productId: productId,
            userName: userName
        }

        try {
            
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(newPost)
            });
            
            console.log(newPost);
            
            if(!res.ok){
                throw new Error("Error al realizar el post.");
            }
    
            const data = await res.json();
            console.log(data);

        } catch (error) {
            setMessage("Error al realizar el post.");
        }
    }

    return (
        <>
            <button onClick={handleGetProducts}>
                Mostrar productos
            </button>
            <div className="products">
                {loading && <Spinner color="orange"/>}
                {products.slice(0, 12).map((product) => (
                    <div key={product.id} className="card">
                        <h3>{product.title}</h3>
                        <img src={product.image}/>
                        <button onClick={() => handlePost(product.id)}>Comprar</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TheBoss