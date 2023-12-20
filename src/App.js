import './App.css';
import Add from './Adding/Add';
import SuccessPage from './Adding/SuccessPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <img src="https://miro.medium.com/v2/resize:fit:2400/1*vPcT8kAwljMOO3NvkFALlQ.png" alt='made2'></img>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/success" element={<SuccessPage />} />

        
      </Routes>
    </Router>
  );
}

// Define a component for the default route
export default App;
