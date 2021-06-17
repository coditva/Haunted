import type { ShallowWrapper } from 'enzyme';

import { shallow } from 'enzyme';
import HtmlContainer from 'lib/components/HtmlContainer';

describe('HtmlContainer', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<HtmlContainer html='<div class="abc">testing</div>' />);
  });

  it('should mount', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have classname as html-container', () => {
    const container = wrapper.find('.html-container');

    expect(container.exists()).toEqual(true);
  });

  it('should mount the given Html', () => {
    const div = wrapper.html();

    expect(div).toEqual('<div class="html-container"><div class="abc">testing</div></div>');
  });
});
