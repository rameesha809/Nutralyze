
import './App.css'
import Landing from './components/Landing'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Started from './components/Started'
import Nav from './components/Nav'
function App() {
  return (
    <>
    <Router>
        <Nav />
      <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Started' element={<Started />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
