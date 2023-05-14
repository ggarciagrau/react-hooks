import { useLayoutEffect, useRef, useState } from "react";
import propTypes from "prop-types";

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {

        const { width, height} = pRef.current.getBoundingClientRect();

        if (height >= 180)
            pRef.current.style.backgroundColor = 'red';

        setBoxSize({width, height});
    }, []);

    return (
        <div>
            <blockquote className="blockquote text-end">
                <p className="mb-1" ref={pRef}>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
                <code>{JSON.stringify(boxSize)}</code>
            </blockquote>
        </div>
    );
}

Quote.propTypes = {
    quote: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}