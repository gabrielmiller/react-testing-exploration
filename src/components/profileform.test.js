import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ProfileForm from './profileform';
import TestButton from './testButton';

test('it is a contrived assertion', () => {
    expect(true).toBe(true);
});

test('contains a button when shallow rendered', () => {
    const wrapper = shallow(<ProfileForm />);
    expect(wrapper.find(TestButton)).toHaveLength(1);
});

test('contains two text inputs', () => {
    const wrapper = shallow(<ProfileForm />);
    expect(wrapper.find('input[type="text"]')).toHaveLength(2);
});

test('it matches the snapshot', () => {
    const component = renderer.create(<ProfileForm />).toJSON();
    expect(component).toMatchSnapshot();
});