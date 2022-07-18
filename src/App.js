import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import GitCrudBackEnd from './GitCrudBackEnd';
import ToDo from './components/ToDo';
import Header from './components/Header';
import Update from './components/Update';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
             <Route>
              <Route path="/"></Route>
              <Route path="/Home" element={<Home />}></Route>
              {/* <Route path="/GitCrudBackEnd" element={<GitCrudBackEnd />}></Route> */}
              <Route path="/ToDo" element={<ToDo />}></Route>
              <Route path="/Update" element={<Update />}></Route>
              <Route path="/login" element={<Login />}></Route>

             </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
