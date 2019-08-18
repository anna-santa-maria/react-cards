import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const Deck = ({ cards, onRemove }) =>
    <section className="deck">
        {
            cards.map(({ rank, type }, index) => <Card key={index} type={type} rank={rank} onClick={() => onRemove(index)} />)
        }
    </section>;

Deck.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            rank: PropTypes.number,
            type: PropTypes.number,
        })
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
};

Deck.defaultProps = {
};

export default Deck;
