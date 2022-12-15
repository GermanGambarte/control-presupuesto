import { useState } from 'react'

export const SpentForm = ({ addSpent }) => {
  const initialValue = {
    amount: '',
    motive: '',
  }
  const [newSpent, setNewSpent] = useState(initialValue)

  const onChangeHandler = (e) => {
    setNewSpent({ ...newSpent, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    addSpent({ ...newSpent, id: Date.now() })
    setNewSpent(initialValue)
  }

  return (
    <form className="spent-group" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <label htmlFor="amount">Monto</label>
        <input
          id="amount"
          name="amount"
          placeholder="e.j. 500"
          step="any"
          type="number"
          value={newSpent.amount}
          onChange={onChangeHandler}
        />
      </div>
      <div className="input-group">
        <label htmlFor="motive">Motivo</label>
        <input
          id="motive"
          name="motive"
          placeholder="e.j. Varios..."
          type="text"
          value={newSpent.motive}
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit">Agregar gasto</button>
    </form>
  )
}
