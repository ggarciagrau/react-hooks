import { memo } from 'react';
import propTypes from 'prop-types';

export const Small = memo(({ number }) => {

    console.log('Small component called!');

    return (
        <small>{number}</small>
    );
});

Small.propTypes = {
    number: propTypes.number.isRequired
}