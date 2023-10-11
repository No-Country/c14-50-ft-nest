import RegisterForm from '@/components/RegisterForm'
import { fireEvent, render, screen } from '@testing-library/react'

it('Shoud have a register button', () => {
  render(<RegisterForm/>) 

  const myElem = screen.getByText('Registrar')
  expect(myElem).toBeInTheDocument()
})


it('Rellenar un Formulario', () => {
  render(<RegisterForm/>)

  const nameInput = screen.getByLabelText('Nombre');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput).toHaveValue('John Doe');

  //const lastnameInput = screen.getByRole('textbox', { name: /lastname/i });
  //const emailInput = screen.getByRole('textbox', { name: /email/i });
  //const dniInput = screen.getByRole('textbox', { name: /dni/i });
  //const passwordInput = screen.getByRole('textbox', { name: /password/i });
  //const repeatPasswordInput = screen.getByRole('textbox', { name: /repeatPassword/i });
  //const phoneNumberInput = screen.getByRole('textbox', { name: /phoneNumber/i }); 
  //const selectElement = screen.getByRole('combobox'); // Obtén el select
  //userEvent.selectOptions(selectElement, screen.getByText('Seleccione Obra Social'));
})
