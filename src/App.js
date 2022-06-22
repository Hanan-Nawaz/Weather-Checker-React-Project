import Weather from './Components/weather';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Header />
     <Weather />
     <Footer />
    </div>
  );
}

export default App;
