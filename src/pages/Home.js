import GetItems from '../components/GetItems';
import Hours from './hours';
import Landing from './landing'
import Menus from './menus';
import Restaurant from './Restaurant';
import Fooddisplay from './fooddisplay';

function Home() {
    return (
        <div>
            <Landing></Landing>
            <Restaurant></Restaurant>
            <Menus></Menus>
            <Fooddisplay></Fooddisplay>
            <GetItems></GetItems>
            <Hours></Hours>
        </div>
    )
}

export default Home;