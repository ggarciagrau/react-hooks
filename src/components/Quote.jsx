import propTypes from "prop-types";

export const Quote = ({ quote, author }) => {

    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    );
}

Quote.propTypes = {
    quote: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}