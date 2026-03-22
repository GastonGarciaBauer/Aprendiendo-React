import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from "./Spinner";

const UseEffectFetch = () => {
    
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const userName = 'GastonGarciaBauer';
    const BASE_URL = `https://api.github.com/users/${userName}`;

    useEffect(() => {
        const fetchData = async () => {
            
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));

            try{
                const dataRes = await fetch(BASE_URL);
                
                if(!dataRes.ok){
                    
                    throw new Error("No se pudo obtener el perfil.");
                }

                const data = await dataRes.json();
                setProfile(data);
            }
            catch(error){
                setMessage("Error al consultar el perfil...");
            }
            finally {
                setLoading(false);
            }
        
        }
        fetchData();

    }, [userName]);

    return (
        <>
            {/* el condicional no puede renderizar más de un componente*/}
            
            {loading && ( 
                <>
                <Spinner color="red"/> 
                <p>Buscando en GitHub...</p>
                </>
            )}
            
            {message && <p>{message}</p>}
            
            {profile && (
                <div>
                    <img src={profile.avatar_url} alt="Imágen de perfil" width="500"/>
                    <h2>Nombre: {profile.name}</h2>
                    <p>Repos públicos: {profile.public_repos}</p>
                </div>
            )}
        </>
    )
}

export default UseEffectFetch;