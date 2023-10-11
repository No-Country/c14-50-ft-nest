import RegisterForm from '@/components/RegisterForm'

import { render, screen } from '@testing-library/react'


it('Shoud have a register button', () => {
  render(<RegisterForm/>) 

  const myElem = screen.getByText('Registrar')
  expect(myElem).toBeInTheDocument()
})

it('Rellenar un Formulario', () => {
  render(<ResgisterForm/>)

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput ).toHaveValue('John Doe');

  const nameInput = screen.getByRole('textbox', { lastname: /lastname/i });
  const emailInput = screen.getByRole('textbox', { email: /email/i });
  const emailInput = screen.getByRole('textbox', { dni: /dni/i });
  const submitButton = screen.getByRole('textbox', { password: /password/i });
  const submitButton = screen.getByRole('textbox', { repeatPassword: /repeatPassword/i });
  const submitButton = screen.getByRole('textbox', { phoneNumber: /phoneNumber/i }); 

  const selectElement = getByRole('combobox'); // Obtén el select
  userEvent.selectOptions(selectElement, getByText('Seleccione Obra Social'));

})
