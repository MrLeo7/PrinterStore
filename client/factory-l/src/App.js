import './App.css';
import Navbar from './components/navbar/Navbar'; 
import WelcomeImage from './components/welcomeImage/WelcomeImage';
import Why3D from './components/why3D/Why3D';
import Statistics from './components/statistics/Statistics';

function App() {
  return (
    <div className="App">
      
      <Navbar /> 
       <WelcomeImage />
      <Why3D /> 
      <Statistics />
    </div>
  );
}

export default App;
