import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Why3D from "./components/why3D/Why3D";
import Statistics from "./components/statistics/Statistics";
import OurServices from "./components/ourServicesList/OurServices";
import MaterialList from "./components/materialList/MaterialList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Why3D />
      <Statistics />
      <OurServices />
      <MaterialList />
    </div>
  );
}

export default App;
