/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header'

describe('<Header />', () => {
  it('check title Estimeo Highlights', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('title').text()).toEqual('Estimeo Highlights')
  })

  it('check contains url exists', () => {
    const wrapper = shallow(<Header />)
    expect(
      wrapper.contains(
        '<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />'
      )
    )
  })

  it('check contains url exists', () => {
    const wrapper = shallow(<Header />)
    expect(
      wrapper.contains(
        '<link rel="stylesheet" href="/static/css/estimeo-style.css"/>'
      )
    )
  })

  it('check contains url exists', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('style')).toHaveLength(1)
  })
})
