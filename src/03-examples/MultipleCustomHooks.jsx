import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    return (
        <>
            <h1>BreakingBad quotes</h1>
            <hr />
            {
                isLoading && <p>Loading...</p>
            }
            {
                data && data.map(({ quote, author }, index) => (
                    <blockquote className="blockquote text-end" key={index}>
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                ))
            }
            {
                error && <p>Error</p>
            }

            <button
                className="btn btn-primary"
                onClick={increment}
                disabled={isLoading}
            >
                Next quote
            </button>
        </>
    )
}