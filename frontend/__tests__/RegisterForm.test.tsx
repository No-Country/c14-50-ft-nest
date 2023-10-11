import RegisterForm from '@/components/RegisterForm'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'


it('Shoud have a register button', () => {
  render(<RegisterForm/>) 

  const myElem = screen.getByText('Registrar')
  expect(myElem).toBeInTheDocument()
})