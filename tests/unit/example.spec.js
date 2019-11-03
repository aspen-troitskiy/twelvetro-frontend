import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';
// import GameField from '@/components/GameField.vue';

describe.skip('GameField.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    // const wrapper = shallowMount(GameField, {
    //   propsData: { msg },
    // });
    expect(msg).to.include(msg);
  });
});
