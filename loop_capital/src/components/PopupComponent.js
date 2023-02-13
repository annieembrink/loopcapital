import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { useState } from 'react';
import ActiveLinkComponent from './ActiveLinkComponent';

const PopupComponent = ({ showPopup, setShowPopup, popupCompany, errormsg }) => {

  const [content, setContent] = useState(popupCompany.acf.about);
  const [chosenLink, setChosenLink] = useState('About');
  let text; 

  const closeButton = () => {
    setShowPopup(false);
  }

  const childProps = {
    setContent,
    popupCompany,
    setChosenLink,
    chosenLink, 
    errormsg,
    text
  }
  
  console.log('popup', popupCompany.acf)

  return (
    <Modal className='modal-xl' show={showPopup} onHide={closeButton}>
      <Modal.Header closeButton>
        <Modal.Title>{popupCompany.title.rendered}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={popupCompany.acf.image_of_the_company} alt={popupCompany.title.rendered} width={1000} height={600} />

        <p className="green-text p-tag-popup">{popupCompany.acf.branch}</p>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='About'/>
          </li>
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='Testimonials'/>
          </li>
        </ul>

        <div className='p-tag-about-testamonials'>
        <p>{content}</p>
        {chosenLink === 'Testimonials' && popupCompany.acf.who_left_the_testimonial ?
        <p className="right-align bold-font">{popupCompany.acf.who_left_the_testimonial}</p>
        : null}
        {chosenLink === 'About' ? 
        <>
        <p>Check out their website!</p>
        <p>{popupCompany.acf.company_website}</p> 
        </>
        : null}
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default PopupComponent;
