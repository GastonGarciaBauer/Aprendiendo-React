import React from 'react';
import { useState } from 'react';

const UseStatePractice = () => {
    
    const [contador, setContador] = useState(0);

    const handleSum = () => {
        setContador(contador + 1); // setContador(prevContador => prevContador + 1) -> estado previo (garantiza sumar sobre el último estado, y no sobre uno viejo)
    }

    const handleSub = () => {
        if(contador  != 0){
            setContador(contador - 1);
        }
    }

    const handleReset = () => {
        setContador(0);
    }
  
    return (
        
        <div>
            <h1>CONTADOR</h1>
            {contador}
            <button onClick={handleSum}>+</button>
            <button onClick={handleSub} disabled={contador === 0}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default UseStatePractice;