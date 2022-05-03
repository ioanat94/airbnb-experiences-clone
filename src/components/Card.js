import starImage from '../images/star.png';

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../images/${props.img}`)} alt={props.img} className='card-img' />
            <div className='card-stats'>
                <img src={starImage} alt='Star' className='star-img' />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;