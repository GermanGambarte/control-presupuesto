import { useRef } from 'react'

export const FundForm = ({ addFunds, resetFund }) => {
  const fundRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const fundRefValue = Number(fundRef.current.value)

    addFunds(fundRefValue)
    console.log(
      '🚀 ~ file: FundForm.component.jsx:11 ~ onSubmitHandler ~ fundRef:',
      fundRefValue,
      '(type:',
      typeof fundRefValue + ')'
    )
    // fundRef.current.value = null
  }

  return (
    <form className="fund-group" onSubmit={onSubmitHandler}>
      <label className="form-label" htmlFor="fund" placeholder="Añadir Fondos">
        Añadir fondos
      </label>
      <input
        ref={fundRef}
        className="form-input"
        defaultValue=""
        id="fund"
        name="fund"
        placeholder="e.g. 500.50"
        step="any"
        type="number"
      />
      <div className="buttons-wrapper">
        <button className="form-btn" onClick={resetFund}>
          Reset
        </button>
        <button className="form-btn" type="submit">
          Agregar Fondos
        </button>
      </div>
    </form>
  )
}
