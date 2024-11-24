import './outcomeItem.css'

export default function OutcomeItem({logo, logoStyle, color, appointment, percent}) {
    return(
        <div className='outcomeItem'>
                    <img className={logoStyle} src={logo} alt="" />
                    <div className='outStatistic'>
                        <div className={color}></div>
                        <div className='statisticName'>{appointment}</div>
                    </div>
                    <div className='statisticQantity'>{percent}%</div>
        </div>
    )
}