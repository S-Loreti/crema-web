import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";
import NavBar from "./Navbar";
import CafeCard from "./CafeCard";

const App = () => {
  
  return (
    <div >
      <Router>
      <NavBar className="navbar fixed-top"/>
      <div className="container-fluid" style={{paddingTop: '100px', backgroundColor: '#FFFCF2', margin: '0'}}>
        <Routes>
          <Route exact path="/" element={<CafeCard />}/>
          <Route exact path="/Cafe" element={<Form />}/>
        </Routes>
      </div>
      </Router>
    </div>
  )

}

export default App;
