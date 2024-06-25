import Navigation from '../components/navigation'
import Main from '../page/main-page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
