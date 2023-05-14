import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState({
        data: null,
        isLoading: false,
        error: false
    });

    const doFetch = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData({
                ...data,
                error: false,
                isLoading: false,
                data: data
            }))
            .catch(err => setData({
                ...data,
                error: true,
                isLoading: false,
                data: null
            }));
    }

    useEffect(() => {
        setData({
            ...data,
            error: false,
            isLoading: true,
            data: null
        })

        doFetch();
    }, [url]);

    return {
        ...data
    };

}