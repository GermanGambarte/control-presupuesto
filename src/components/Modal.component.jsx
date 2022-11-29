export const Modal = () => {
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-content-wrapper">
          <h2>Agregar nuevo gasto</h2>
          <form action="">
            <div className="input-container">
              <label htmlFor="spent">Motivo</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="amount">Motivo</label>
              <input id="amount" name="amount" type="number" />
            </div>
            <button className="submit-btn">Agregar</button>
          </form>
        </div>
      </div>
    </>
  )
}
