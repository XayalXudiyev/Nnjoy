import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const AutoPlayCarousel = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const images = [
     
        {
            url: 'https://picsum.photos/201',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/202',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/203',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/204',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/205',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/206',
            alt: 'Image 2',
        },
        {
            url: 'https://picsum.photos/207',
            alt: 'Image 3',
        },
        {
            url: 'https://picsum.photos/208',
            alt: 'Image 4',
        }
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleButtonClicked = () => {
        setModalIsOpen(true);
    }

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='p-4'>
            <div className="d-flex align-items-center justify-content-between "><h1>Maskot Personajlar</h1>
                <Button className='btn btn-dark h-100  ' onClick={handleButtonClicked}>Hamısına bax</Button>
            </div>

            <Slider {...settings}>

                {images.map((image, index) => (
                    <div key={index}>

                        <img src={image.url} alt={image.alt} style={{ width: '99%' }} />
                        <h4>Maşa</h4>
                        <p>25 AZN</p>
                    </div>
                ))}
            </Slider>

            <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} >
                <div className='d-flex justify-content-between px-3 py-0 '>
                    <h2>Bütün Şəkillər</h2>
                    <button className="close-btn btn btn-dark h-25 " onClick={handleModalClose}>
                        X
                    </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', padding: '20px' }}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={image.alt} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>





                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', padding: '20px' }}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={image.alt} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </Modal>



        </div>
    );
};

export default AutoPlayCarousel;
