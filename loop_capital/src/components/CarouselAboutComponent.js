import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

const CarouselAboutComponent = () => {
    return (
        <>
        <div className="wrapper-carousel margin-bottom">
            <Carousel>
                <Carousel.Item interval={8000}>
                    <div>
                        <h3>Our vision and ambition</h3>
                        <h4>Why we started</h4>
                    </div>
                        <p className='p_element_carousel'>Loop started with the ambition to engage the local capital in growth trips and to support Skånes entrepreneurs.</p>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                        <h3>Our vision and ambition</h3>
                        <h4>An idea</h4>
                        </div>
                        <p className='p_element_carousel'>An idea is not better because you have it in your mind in Silicon Valley, Stockholm or Helsingborg. It is the conditions that are different. Over 90% of all tech investments in Sweden end up in Stockholm. But over 70% of all companies are started outside.</p>
                </Carousel.Item>
                <Carousel.Item>
                <div>
                        <h3>Our vision and ambition</h3>
                        <h4>Network</h4>
                        </div>
                        <p className='p_element_carousel'>
                        The network consists of 48 investors with different skills. As we invest at an early stage in the company&apos;s journey, we can add both capital and expertise to help and support entrepreneurs.
                        </p>
                </Carousel.Item>
                <Carousel.Item>
                    <div>

                        <h3>Our vision and ambition</h3>
                        <h4>Support</h4>
                        </div>
                        <p className='p_element_carousel'>
                        Loop started with the ambition to engage the local capital in growth trips and to support Skånes entrepreneurs.
                        </p>
                </Carousel.Item>
            </Carousel>
            <Image width={400} height={400} src='/images/prisma.jpg' className='img-carousel' alt='Prismahuset'/>
            </div>
        </> 
    );

}

export default CarouselAboutComponent;