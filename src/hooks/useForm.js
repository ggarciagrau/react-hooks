import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [data, setData] = useState(initialForm);

    const update = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    return {
        ...data,
        data,
        update
    };
}