import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import SiteHeader from "./components/SiteHeader"

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={ <Homepage />}/>

          <Route path="/details/:id"  element={<ReviewDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
