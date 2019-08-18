import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';
import GameModel from '../model/game_model';

configure({ adapter: new Adapter() });

describe('<Card/>', () => {
    const [{ type, rank }] = GameModel.generate(4);

    const props = {
        type,
        rank
    };

    describe('render', () => {
        it('with default/required props', () => {
            const c = shallow(<Card {...props} />);

            expect(c).toMatchSnapshot();
        });
    });
});
