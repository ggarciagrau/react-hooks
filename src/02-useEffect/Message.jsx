import { useEffect } from 'react';
import propTypes from 'prop-types';

export const Message = ({ message }) => {

    useEffect(() => {

        const onMouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log('coords', coords);
        };
        window.
            addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (
        <>
            <h5>{message}</h5>
        </>
    )
}

Message.propTypes = {
    message: propTypes.string.isRequired
}