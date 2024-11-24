import './outcomeStatistics.css'
import shopLogo from '../logo/shopLogo.svg'
import deliveryLogo from '../logo/deliveryLogo.svg'
import OutcomeItem from './OutcomeItem.jsx'
import userLogo from '../logo/userLogo.svg'

export default function OutcomeStatistics() {
    return(
        <div className='outcomeStatisticsContainer'>
            <div className='outcomeTitle'>Outcome Statistics</div>
            <div className='outcomeList'>
                <OutcomeItem logo={shopLogo} logoStyle='orangeLogo' color='orange' appointment='Shopping' percent='52'/>
                <OutcomeItem logo={deliveryLogo} logoStyle='greenLogo' color='green' appointment='Electronics' percent='21'/>
                <OutcomeItem logo={userLogo} logoStyle='blueLogo' color='blue' appointment='Remittance' percent='74'/>
            </div>
        </div>
    )
}