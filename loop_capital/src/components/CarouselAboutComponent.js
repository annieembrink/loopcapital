import Carousel from 'react-bootstrap/Carousel';


const CarouselAboutComponent = () => {
    return (
        <>
        <div className="wrapper_carousel">
            <Carousel>
                <Carousel.Item interval={8000}>
                    <div className='about_slide'>
                    </div>
                    <Carousel.Caption>
                        <h3>Our vision and ambition</h3>
                        <h4>Why we started</h4>
                        <p>Loop started with the ambition to engage the local capital in growth trips and to support Skånes entrepreneurs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='about_slide'>
                    </div>
                    <Carousel.Caption>
                        <h3>Our vision and ambition</h3>
                        <h4>An idea</h4>
                        <p>An idea is not better because you have it in your mind in Silicon Valley, Stockholm or Helsingborg. It is the conditions that are different. Over 90% of all tech investments in Sweden end up in Stockholm. But over 70% of all companies are started outside.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='about_slide'>
                    </div>
                    <Carousel.Caption>
                        <h3>Our vision and ambition</h3>
                        <h4>Network</h4>
                        <p>
                        The network consists of 48 investors with different skills. As we invest at an early stage in the company's journey, we can add both capital and expertise to help and support entrepreneurs.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='about_slide'>
                    </div>
                    <Carousel.Caption>
                        <h3>Our vision and ambition</h3>
                        <h4>Support</h4>
                        <p>
                        Loop started with the ambition to engage the local capital in growth trips and to support Skånes entrepreneurs.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img src='/images/prisma.jpg' className='img_carousel'></img>
            </div>
        </>
    );

}

export default CarouselAboutComponent;