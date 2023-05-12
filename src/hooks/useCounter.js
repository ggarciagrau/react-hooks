import { useState } from "react";
import PropTypes from 'prop-types';

export const useCounter = (initialValue) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { counter, increment, decrement, reset };
}

useCounter.propTypes = {
    initialValue: PropTypes.number.isRequired
}