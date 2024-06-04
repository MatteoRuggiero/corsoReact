import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Lorenzo from './components/Lorenzo';
import Matteo from './components/Matteo';
import Mauro from './components/Mauro';
import Home from './components/Home';
import MauroDetails from './components/MauroDetails';
import SharedLayoutMauro from "./layouts/SharedLayoutMauro";


function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Lorenzo" element={<Lorenzo />} />
          <Route path="/Matteo" element={<Matteo />} />
          <Route path="/Mauro" element={<SharedLayoutMauro />} >
            <Route index element={<Mauro />} />
            <Route path=":secretId" element={<MauroDetails />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
