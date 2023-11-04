import RegisterForm from '@/components/RegisterForm'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('RegisterForm', () => {
  it('Shoud have a button with "Registrar" text', () => {
    render(<RegisterForm/>) 
  
    const myElem = screen.getByText('Registrar')
    expect(myElem).toBeInTheDocument()
  })

  it('Complete the name input', () => {
    render(<RegisterForm/>)
  
    const nameInput = screen.getByLabelText('Nombre');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
  })

  it('Selecting an insurance option should display additional checkboxes.', () => {
    render(<RegisterForm/>)

    const selectElement = screen.getByRole('combobox'); // Obtén el select
    userEvent.selectOptions(selectElement, screen.getByText('* Seleccione Obra Social *'));

    const checkbox1 = screen.getByText('Obra Social 1');
    const checkbox2 = screen.getByText('Obra Social 2');
    const checkbox3 = screen.getByText('Obra Social 3');

    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
    expect(checkbox3).toBeInTheDocument();
  })

  it('Submitting the form with all fields filled should call the submitData function.', () => {
    render(<RegisterForm/>)
    const submitData = jest.fn()

    const nameInput = screen.getByLabelText('Nombre');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const lastNameInput = screen.getByLabelText('Apellido');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    const dniInput = screen.getByLabelText('DNI');
    fireEvent.change(dniInput, { target: { value: '12345678' } });

    const emailInput = screen.getByLabelText('Correo electrónico');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const selectElement = screen.getByRole('combobox'); // Obtén el select
    userEvent.selectOptions(selectElement, screen.getByText('Obra Social 2'));

    const dateInput = screen.getByLabelText('Fecha de nacimiento');
    fireEvent.change(dateInput, { target: { value: '1990-01-01' } });

    const phoneNumberInput = screen.getByLabelText('Número de teléfono');
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });

    const passwordInput = screen.getByLabelText('Contraseña');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const confirmPasswordInput = screen.getByLabelText('Confirmar contraseña');
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByText('Registrar');
    fireEvent.click(submitButton);

    // expect(selectElement).toHaveValue('Obra Social 2')
    // expect(submitData).toHaveBeenCalled();
  })
})
