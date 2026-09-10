import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Fiche_Logement from './pages/Fiche_Logement'
import Error from './pages/Error'


function App(){

  return(

    <Router>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/Fiche_Logement/:id" element={<Fiche_Logement />}/>
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>

    </Router>

  );

}

export default App;