
import './App.css';
import { Footer } from './layouts/footer/Footer';
import { Header } from './layouts/header/Header';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
