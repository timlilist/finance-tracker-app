import './cashMove.css';

export default function CashMove( {amount, appointment, moneyclass} ) {
    return(
        <div className='cashMoveInfo'>
            <div className={moneyclass}>${amount}</div>
            <div className='appointmentCash'>{appointment}</div>
        </div>
    )
}