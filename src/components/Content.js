import Hero from './Hero';
import Card from './Card';
import data from '../data'

function Content() {
    const dataElements = data.map(experience => {
        return <Card 
                    key={experience.id}
                    img={experience.coverImg} 
                    rating={experience.stats.rating}
                    reviewCount={experience.stats.reviewCount}
                    location={experience.location}
                    title={experience.title}
                    price={experience.price}
                /> 
    })

    return (
        <div className='content'>
            <Hero />
            <div className='cards-container'>{dataElements}</div>
        </div>
    )
}

export default Content;