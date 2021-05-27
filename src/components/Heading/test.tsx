import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won games</Heading>)
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won games</Heading>)
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a left border when props is passed', () => {
    renderWithTheme(<Heading lineLeft={true}>Won games</Heading>)
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a bottom border when props is passed', () => {
    renderWithTheme(<Heading lineBottom={true}>Won games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
