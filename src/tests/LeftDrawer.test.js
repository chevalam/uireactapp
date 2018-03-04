import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import LeftDrawer from '../components/LeftDrawer';

configure({ adapter: new Adapter() });

describe('LeftDrawer', () => {
    it('should render correctly', () => {
        const output = shallow(
            <LeftDrawer />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
