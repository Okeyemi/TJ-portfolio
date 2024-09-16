import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Component/Footer';
import Projects from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
