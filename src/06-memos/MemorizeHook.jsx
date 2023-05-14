import { useState, useMemo } from "react";
import { useCounter } from "../hooks";
import { Small } from "../components/Small";

const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Doing...');
    }

    return `${iterations} iterations done.`;
}

export const MemorizeHook = () => {

    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(4000);

    const memorizedValue = useMemo(
        () => heavyProcess(counter),
        [counter]
    );

    return (
        <>
            <div>
                <h1>Counter: <small>{counter}</small></h1>
                <hr />

                <h4>{memorizedValue}</h4>

                <button
                    className="btn btn-primary"
                    onClick={increment}
                >
                    +1
                </button>
            </div>

            <button
                className="btn btn-primary mt-1"
                onClick={() => setShow(!show)}
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </>
    );
}