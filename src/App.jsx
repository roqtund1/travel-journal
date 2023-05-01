
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data/data'

function App() {
  const CardElement = data.map(obj => {

    return <Card
    
      key = {obj.id}
      obj = {obj}
    />
  })


  return (
    <div className="App">
      <Navbar/>
      {CardElement}

      
    </div>
  )
}

export default App
