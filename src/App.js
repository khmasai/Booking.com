import './App.css';
import Footer from './components/Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import NavBar from "./components/Header/Header"

function App() {
  return (
    <div className="App">
        <NavBar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
