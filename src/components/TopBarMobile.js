import Sidebar from './Sidebar';
import './topbar.css'

function TopBarMobile() {
    return <div className='top'>
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'Wrapper'} />

    <div id="page-wrap"></div>
  </div>
}

export default TopBarMobile