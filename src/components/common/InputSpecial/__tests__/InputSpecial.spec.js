import { mount, createLocalVue } from '@vue/test-utils';
import InputSpecial from '../InputSpecial.vue';

const localVue = createLocalVue();

describe('InputSpecial', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(InputSpecial, {
			localVue,
		});
	});

	describe('General Behavior', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});
	});
});
