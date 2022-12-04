import GetItems from '../components/GetItems';
import Hours from './hours';
import Landing from './landing'
import Menus from './menus';

function Home() {
    return (
        <div>
            <Landing></Landing>
            <Menus></Menus>
            <Hours></Hours>
            <GetItems></GetItems>
        </div>
    )
}

export default Home;