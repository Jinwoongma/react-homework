import './Week01.css';
// import HW01 from './Components/Week1/HW01/HW01';
// import HW02_Content from './Components/Week1/HW02/HW02_Content';
// import HW02_Footer from './Components/Week1/HW02/HW02_Footer';
// import HW02_Header from './Components/Week1/HW02/HW02_Header';
import About from './Components/Week1/HW03/About/About';
import Skills from './Components/Week1/HW03/Skills/Skills';
import Footer from './Components/Week1/HW03/Layout/Footer';
import Header from './Components/Week1/HW03/Layout/Header';

function Week01() {
  return (
    <div className="Week01">
      
      {/* <HW01/> */}

      {/* <HW02_Header/>
      <HW02_Content/>
      <HW02_Footer/> */}

      <Header/>
      <About/>
      <Skills/>
      <Footer/>

    </div>
  );
}

export default Week01;
