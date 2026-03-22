const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const PostService = {
    getAll: async () => {
        const res = await fetch(BASE_URL);
        if(!res.ok){
            throw new Error("No se pudo realizar la petición.");
        }
        const data = await res.json();
        return data;
    },

    create: async (newPost) => {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newPost)   
        })
        if(!res.ok){
            throw new Error("Error al realizar el post.");
        }
        const data = await res.json();
        return data;
    }
}