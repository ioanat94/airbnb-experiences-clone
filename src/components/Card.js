import starImage from '../images/star.png';

function Card(props) {
    let badgeText
    if (props.experience.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.experience.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../images/${props.experience.coverImg}`)} alt={props.experience.coverImg} className='card-img' />
            <div className='card-stats'>
                <img src={starImage} alt='Star' className='star-img' />
                <span>{props.experience.stats.rating}</span>
                <span className='gray'>({props.experience.stats.reviewCount}) • </span>
                <span className='gray'>{props.experience.location}</span>
            </div>
            <p>{props.experience.title}</p>
            <p><span className='bold'>From ${props.experience.price}</span> / person</p>
        </div>
    )
}

export default Card;