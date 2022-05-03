import Hero from './Hero';
import Card from './Card';
import data from '../data'

function Content() {
    const dataElements = data.map(experience => {
        return (
            <Card 
                key={experience.id}
                experience={experience}
            /> 
        )
    })

    return (
        <div className='content'>
            <Hero />
            <div className='cards-container'>{dataElements}</div>
        </div>
    )
}

export default Content;