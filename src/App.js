import './App.css';
import Content from './components/content';
import Desc from './components/halaman_desc/desc';
import Login from './components/login';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';

function App() {
  return (
    <div>
      <Desc />
      {/* <Content /> */}
      {/* <Login />/ */}
      <Halaman_Home_Guest />
    </div>
  );
}

export default App;
