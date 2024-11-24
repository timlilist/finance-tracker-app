import "./menuItem.css"

export default function MenuItem( {itemLogo, itemName} ) {
    return(
        <li className="menuItem">
            <img src={itemLogo} alt="Item Logo" />
            {itemName}
        </li>
    )
}