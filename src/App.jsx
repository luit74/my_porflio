import { useState } from 'react';
import './App.css';
import PortfolioOne from './components/ProtfolioOne';
import MyProject from './components/MyProjects';

function App() {
  const [currentTab, setCurrentTab] = useState('bio');

  const handleClick = (tab) => {
    console.log("Tab clicked:", tab);
    setCurrentTab(tab);
  };

  return (
    <div className='app-container'>
      <div className={`card-wrapper ${currentTab === 'projects' ? 'flipped' : ''}`}>
        <div className="card-front">
          <PortfolioOne handleClick={handleClick} />
        </div>
        <div className="card-back">
          <MyProject handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
