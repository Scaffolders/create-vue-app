import { assert, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

test('mount component', async () => {
    expect(App).toBeTruthy()

    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Create Vue App')
    expect(wrapper.html()).toMatchSnapshot()
})