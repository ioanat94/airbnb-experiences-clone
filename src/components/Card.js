import starImage from '../images/star.png';

function Card(props) {
    return (
        <div className='card'>
            <img src={require(`../images/${props.img}`)} alt='Katie Zaferes' className='card-img' />
            <div className='card-stats'>
                <img src={starImage} alt='Star' className='star-img' />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;