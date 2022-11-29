import { Modal } from './components/Modal.component'
import { Dashboard } from './components/Dashboard.component'
import { List } from './components/List.component'
import './App.css'

const App = () => {
  return (
    <main>
      <h1>Gasto Semanal</h1>
      <div className="btn-container">
        <button>Definir presupuesto</button>
        <button>Agregar gasto</button>
      </div>
      <Modal />
      <div className="container">
        <Dashboard />
        <List />
      </div>
    </main>
  )
}

export default App
