import Card from './Card.jsx';
import './dashboard.css';
import Graph from './Graph.jsx';
import Menu from './Menu';
import OutcomeStatistics from './OutcomeStatistics.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import menuLogo from '../logo/menuLogo.svg';
import { useState } from 'react';

export default function Dashboard() {
    const[openMenu, setOpenMenu] = useState(false)
    
    return(
        <div className='dashboardContainer'>
            <Menu open={openMenu} setOpen={setOpenMenu}/>
            <div className='menubtn'>
                <img src={menuLogo} onClick={() => setOpenMenu(!openMenu)} alt="" />
             </div>
            <div className={openMenu ? 'infoContainer active' : 'infoContainer'}>
                <div className='menuDashboard'>
                    <div className='pageName'>Dashboard</div>
                </div>
                
                <div className='partContainer'>
                    <div className='leftPart'>
                        <Card />
                        <TransactionHistory />
                    </div>
                    <div className='rightPart'>
                        <OutcomeStatistics />
                        <Graph />
                    </div>
                </div>
                
            </div>
        </div>
    );
}