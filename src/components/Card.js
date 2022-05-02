import cardImage from '../images/katie-zaferes.png';
import starImage from '../images/star.png';

function Card() {
    return (
        <div className='card'>
            <img src={cardImage} alt='Katie Zaferes' className='card-img' />
            <div className='card-stats'>
                <img src={starImage} alt='Star' className='star-img' />
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}

export default Card;