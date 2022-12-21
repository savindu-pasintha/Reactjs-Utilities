import React from 'react'
import { render, screen } from '@testing-library/react'
import { Greate } from '../component/greate/Greate'

//normal testing
test('1 test greet render correctly', () => {
  render(<Greate />)
  const testElement = screen.getByText('Great')
  expect(testElement).toBeInTheDocument()
})

test('2 test greet render with propery name called title', () => {
  render(<Greate title="savindu" />)
  const testElement = screen.getByText('Greatsavindu')
  expect(testElement).toBeInTheDocument()
})

//grouped test cases
describe('Group Test Great', () => {
  test('1 test greet render correctly', () => {
    render(<Greate />)
    const testElement = screen.getByText('Great')
    expect(testElement).toBeInTheDocument()
  })

  test('2 test greet render with propery name called title', () => {
    render(<Greate title="savindu" />)
    const testElement = screen.getByText('Greatsavindu')
    expect(testElement).toBeInTheDocument()
  })
})
