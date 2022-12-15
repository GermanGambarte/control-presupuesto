import { useState } from 'react'

import { FundForm } from './components/FundForm.component'
import { SpentForm } from './components/SpentForm.component'
import { SpentsTable } from './components/SpentsTable.component'

const App = () => {
  const [funds, setFunds] = useState(0)
  const [spents, setSpents] = useState([])
  const addSpent = (newSpent) => {
    setSpents([...spents, newSpent])
  }
  const addFunds = (newFund) => {
    if (funds !== 0) return setFunds(funds + newFund)
    setFunds(newFund)
  }
  const deleteSpent = (id) => {
    const filteredSpents = spents.filter((spent) => spent.id !== id)

    setSpents(filteredSpents)
  }
  const resetFund = () => setFunds(0)

  return (
    <div className="wrapper">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <main className="container">
        <FundForm addFunds={addFunds} resetFund={resetFund} />
        <h1>{funds}</h1>
        <SpentForm addSpent={addSpent} />
        <SpentsTable deleteSpent={deleteSpent} spents={spents} />
      </main>
    </div>
  )
}

export default App
