import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

export const Message = ({ message }) => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = (e) =>
            setCoords({ x: e.x, y: e.y });

        window.
            addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (
        <>
            <h5>{message}</h5>
            <p>{JSON.stringify(coords)}</p>
        </>
    )
}

Message.propTypes = {
    message: propTypes.string.isRequired
}