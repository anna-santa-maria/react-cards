import React from 'react';
import PropTypes from 'prop-types';
import { typeNames } from '../model/game_model';

const Card = ({ rank, type, ...props }) => <span className={`card ${typeNames[type]} rank${rank}`} {...props} />

Card.propTypes = {
    rank: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
};

Card.defaultProps = {
};

export default Card;
