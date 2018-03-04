import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ListContacts from '../components/ListContacts';

const contacts = [{}]

configure({ adapter: new Adapter() });

describe('ListContacts', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ListContacts contacts={contacts} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
