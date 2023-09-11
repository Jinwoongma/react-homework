import './App.css';
// import HW01 from './Components/Week1/HW01/HW01';
import HW02_Content from './Components/Week1/HW02/HW02_Content';
import HW02_Footer from './Components/Week1/HW02/HW02_Footer';
import HW02_Header from './Components/Week1/HW02/HW02_Header';

function App() {
  return (
    <div className="App">
      {/* <HW01/> */}

      <HW02_Header/>
      <HW02_Content/>
      <HW02_Footer/>
    </div>
  );
}

export default App;
