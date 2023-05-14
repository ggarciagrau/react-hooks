import React from 'react'
import { Sub } from './Sub'
import { useState, useCallback } from 'react';

export const Super = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const increment = useCallback(
        num => setValor( valor => valor + num ),
        []
    );

    return (
        <div>
            <h1>Super</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Sub 
                        key={ n }
                        numero={ n }
                        incrementar={ increment }
                    />
                ))
            }
        </div>
    )
}