import { useCounter, useFetch } from '../hooks';
import { Quote } from '../components/Quote';

export const Layout = () => {
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
                    <Quote key={index} quote={quote} author={author}/>
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