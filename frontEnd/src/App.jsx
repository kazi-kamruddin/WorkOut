import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/homePage';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>

            <Navbar/>

            <div className="pages">
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
              </Routes>
            </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
