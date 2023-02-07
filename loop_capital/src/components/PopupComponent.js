import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { useState } from 'react';
import ActiveLinkComponent from './ActiveLinkComponent';

const PopupComponent = ({ showPopup, setShowPopup, popupCompany }) => {

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
    text
  }

  return (
    <Modal className='modal-xl' show={showPopup} onHide={closeButton}>
      <Modal.Header closeButton>
        <Modal.Title>{popupCompany.title.rendered}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={popupCompany.acf.image_of_the_company} alt={popupCompany.title.rendered} width={500} height={500} />

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='About'/>
          </li>
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='Testimonials'/>
          </li>
        </ul>

        <div>{content}</div>

      </Modal.Body>
    </Modal>
  );
}

export default PopupComponent;
