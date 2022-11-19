import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItems from './components/GetItems';
import Hours from './pages/hours';
import Landing from './pages/landing'

function App() {

  return (
    <div className="App">
       <Landing></Landing>
       <Hours></Hours>
       <GetItems></GetItems>
    </div>
  );
}

export default App;
