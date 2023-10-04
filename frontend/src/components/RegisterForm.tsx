
const RegisterForm = () => {
  return (
    <form className="flex flex-col text-zinc-700">
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Apellido"/>
      <input type="number" placeholder="DNI"/>
      <input type="email" placeholder="Email"/>
      <select>
        <option>Obra Social 1</option>
        <option>Obra Social 2</option>
        <option>Obra Social 3</option>
        <option>Obra Social 4</option>
      </select>
      <input type="date" placeholder="Fecha de nacimiento"/>
      <input type="number" placeholder="Número de teléfono"/>
      <input type="password" placeholder="Contraseña"/>
      <input type="password" placeholder="Confirmar contraseña"/>
      <button type="submit">Registrar</button>
    </form>
  )
}

export default RegisterForm