import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Mjh from './component/Mjh';
import Footer from './component/Footer';
import Text from './component/Text';
function App() {
  return (
    <div >
      <Header/>
      <Mjh name="바디" color="blue"/>
      <Text text="gkdl"
      size="20px"
      strong="true"
      stlyle={{color: 'blue'}}></Text>
      <Footer/>
      
    </div>
  );
}

export default App;
