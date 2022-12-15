export const SpentsTable = ({ spents, deleteSpent }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Motivo</th>
          <th>Monto</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {spents.map((spent) => (
          <tr key={spent.id}>
            <td>{spent.motive}</td>
            <td>{spent.amount}</td>
            <td>
              <button onClick={() => deleteSpent(spent.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Motivo</td>
          <td>$0,00</td>
          <td>
            <button>Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
