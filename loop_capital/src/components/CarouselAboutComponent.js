import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

const CarouselAboutComponent = (props) => {
    const headline = props.props[0].title.rendered;
    const data = props.props[0].acf;
    return (
        <>
        <div className="wrapper-carousel margin-bottom">
            <Carousel>
                <Carousel.Item interval={8000}>
                    <div className='center_carousel'>
                        <h3>{headline}</h3>
                        <h4>{data.headline_1}</h4>
                    
                        <p className='p_element_carousel'>{data.paragraph_1}</p>
                        </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='center_carousel'>
                        <h3>{headline}</h3>
                        <h4>{data.headline_2}</h4>
                
                        <p className='p_element_carousel'>{data.paragraph_2}</p>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h3>{headline}</h3>
                        <h4>{data.headline_3}</h4>
                    </div>
                        <p className='p_element_carousel'>{data.paragraph_3}</p>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <h3>{headline}</h3>
                        <h4>{data.headline_4}</h4>
                    </div>
                        <p className='p_element_carousel'>{data.paragraph_4}</p>
                </Carousel.Item>
            </Carousel>
            <Image width={400} height={400} src='/images/prisma.jpg' className='img-carousel' alt='Prismahuset'/>
            </div>
        </> 
    );
}
export default CarouselAboutComponent;