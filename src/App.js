import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';


function App() {
  return (
    <div className='app' >
      <Navbar></Navbar>
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
