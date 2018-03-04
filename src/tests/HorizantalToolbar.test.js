import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import HorizantalToolbar from '../components/HorizantalToolbar';

const classes = {
    toolbar: '[object Object]'
}
configure({ adapter: new Adapter() });

describe('HorizantalToolbar', () => {
    it('should render correctly', () => {
        const output = shallow(
            <HorizantalToolbar />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
