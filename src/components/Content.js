import Hero from './Hero';
import Card from './Card';

function Content() {
    return (
        <div className='content'>
            <Hero />
            <Card 
                img='katie-zaferes.png' 
                rating='5.0'
                reviewCount={6}
                country='USA'
                title='Life Lessons with Katie Zaferes'
                price={136}
            />
        </div>
    )
}

export default Content;