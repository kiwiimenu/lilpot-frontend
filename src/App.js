import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItems from './components/GetItems';
import Hours from './pages/hours';
import Landing from './pages/landing'
import Menus from './pages/menus';

function App() {

  return (
    <div className="App">
       <Landing></Landing>
       <Menus></Menus>
       <Hours></Hours>
       <GetItems></GetItems>
    </div>
  );
}

export default App;
