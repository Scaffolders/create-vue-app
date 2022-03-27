import { assert, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Body from '../../components/Body.vue'

test('mount component', async () => {
    expect(Body).toBeTruthy()

    const wrapper = mount(Body)

    expect(wrapper.text()).toContain('Create Vue App')
    expect(wrapper.html()).toMatchSnapshot()
})