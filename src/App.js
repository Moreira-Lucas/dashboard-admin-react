import { useState } from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';

const App = () => {
  
  const [sideBarOpen , setSideBarOpen] = useState(false);
  const openSideBar = () =>{
    setSideBarOpen(true)
  }

  const closeSideBar =() =>{
    setSideBarOpen(false)
  }
  
  return (
    <div className="Container">
      <Navbar sideBarOpen={sideBarOpen} openSideBar={openSideBar}/>
      <Main />
      <SideBar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar}/>
    </div>
  );
}

export default App;
