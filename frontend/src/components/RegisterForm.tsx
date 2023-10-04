
const RegisterForm = () => {
  return (
    <form className="flex gap-3 flex-col text-zinc-700">
      <label>Nombre</label>
      <input type="text" placeholder="Nombre"/>
      <label>Apellido</label>
      <input type="text" placeholder="Apellido"/>
      <label>DNI</label>
      <input type="number" placeholder="DNI"/>
      <label>Email</label>
      <input type="email" placeholder="Email"/>
      <label>Obra Social</label>
      <select>
        <option></option>
        <option>Obra Social 1</option>
        <option>Obra Social 2</option>
        <option>Obra Social 3</option>
        <option>Obra Social 4</option>
      </select>
      <label>Fecha de Nacimiento</label>
      <input type="date" placeholder="Fecha de nacimiento"/>
      <label>Número de Teléfono</label>
      <input type="number" placeholder="Número de teléfono"/>
      <label>Contraseña</label>
      <input type="password" placeholder="Contraseña"/>
      <label>Confirmar Contraseña</label>
      <input type="password" placeholder="Confirmar contraseña"/>
      <button type="submit">Registrar</button>
    </form>
  )
}

export default RegisterForm