import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Fiche_Logement from './pages/Fiche_Logement'
import Error from './pages/Error'
import Nav from './components/Nav'


function App(){

  return(

    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/Fiche_Logement" element={<Fiche_Logement />}/>
        <Route path="*" element={<Error />}/>
      </Routes>

    </Router>

  );

}

export default App;