import { useEffect } from 'react';
import propTypes from 'prop-types';

export const Message = ({ message }) => {

    useEffect(() => {
        console.log("Message component mounted");

        return () => console.log("Message component unmounted");
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