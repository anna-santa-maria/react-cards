import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Deck from './deck';
import GameModel from '../model/game_model';

configure({ adapter: new Adapter() });

describe('<Deck/>', () => {
    const props = {
        cards: GameModel.generate(4),
        onRemove: jest.fn(),
    };

    describe('render', () => {
        it('with default/required props', () => {
            const c = shallow(<Deck {...props} />);

            expect(c).toMatchSnapshot();
        });
    });
});
