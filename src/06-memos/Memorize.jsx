import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "../components/Small";

export const Memorize = () => {

    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(10);

    return (
        <>
            <div>
                <h1>Counter: <Small number={counter} /></h1>
                <hr />

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