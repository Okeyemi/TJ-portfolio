import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;
