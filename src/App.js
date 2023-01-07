import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import lilpotlogo from './assets/lilpotlogo.png'
import lilpottext from './assets/lolpotlogotext.png'
import lilpotchinese from './assets/lolpotlogochinese.png'
import './components/topbar.css'
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import TopBar from './components/topbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const history = useHistory()

  const navigatePage = (page) => {
    history.push(page)
  }

  return (
    <Router>
      <div className='App'>
      <TopBar></TopBar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path = '/aboutus'>
          <AboutUs></AboutUs>
        </Route>
        <Route exact path = '/events'>
          <Events></Events>
        </Route>
        {/* <Route exact path = '/openinghours'>

        </Route> */}

        {/* You can add your routes here by using
        the Route tag and adding the exact path
        and then linking it in the navbar*/}

      </Switch>
       {/* <Landing></Landing>
       <Menus></Menus>
       <Hours></Hours>
       <GetItems></GetItems> */}
       </div>
    </Router>
  );
}

export default App;
