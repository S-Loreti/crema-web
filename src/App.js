import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import NavBar from "./Navbar";
import HomePage from "./HomePage";
import CafeCard from "./CafeCard";
import RoastData from "./RoastData";
import Shop from "./Shop";
import Guide from "./Guide";

const App = () => {
  
  return (
    <div >
      <Router>
      <NavBar className="navbar fixed-top"/>
        <div className="" style={{paddingTop: '150px', backgroundColor: 'white', margin: '0'}}>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/Locator" element={<CafeCard />}/>
            <Route exact path="/Cafe" element={<Form />}/>
            <Route exact path="/Roasters" element={<RoastData />}/>
            <Route exact path="/Guide" element={<Guide />}/>
            <Route exact path="/Shop" element={<Shop />}/>
          </Routes>
        </div>
      </Router>
    </div>
  )

}

export default App;
