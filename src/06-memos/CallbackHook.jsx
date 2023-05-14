import { useState, useCallback, useEffect, memo } from 'react';

const ShowIncrement = memo(({ increment, counter }) => {

    console.log('Rendered again :(');

    useEffect(() => {
        console.log('New instance of ShowIncrement :(');
    }, [increment]);

    return (
        <button 
        className="btn btn-primary"
        onClick={increment}>
            Increment
        </button>
    )
});

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const increment = useCallback(
        () => {
            setCounter(prevCounter => prevCounter + 1)
        },
        []
    );

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <ShowIncrement increment={increment} />
        </>
    );
}