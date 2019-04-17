import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { Search } from './components/Search';
import { Result } from './components/Result';

describe('App component', () => {
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(<App/>);
	});

	afterEach(() => {
		wrapper.unmount();
	});

    it('should render Search component', () => {
        expect(wrapper.find(Search).length).toEqual(1);
    });

    it('should render Result component', () => {
        expect(wrapper.find(Search).length).toEqual(1);
    });

    it('should update state when input field changed', () => {
    	wrapper = mount(<App />);
        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'asd'}});
        wrapper.update();
        expect(wrapper.state().searchPhrase).toEqual('asd');
    });

    it('should clear field', () => {
    	wrapper = mount(<App />);
        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'asd'}});
        wrapper.update();
        expect(wrapper.state().searchPhrase).toEqual('asd');
        wrapper.find('#clearBtn').simulate('click');
        wrapper.update();
        expect(wrapper.state().searchPhrase).toEqual('');
        expect(wrapper.find('input[type="text"]').prop('value')).toEqual('');
    });
});

