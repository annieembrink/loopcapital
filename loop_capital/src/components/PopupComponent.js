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

  return (
    <Modal className='modal-xl' show={showPopup} onHide={closeButton}>
      <Modal.Header closeButton>
        <Modal.Title>{popupCompany.title.rendered}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={popupCompany.acf.image_of_the_company} alt={popupCompany.title.rendered} width={500} height={500} />

        <p className="green-text">{popupCompany.acf.branch}</p>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='About'/>
          </li>
          <li className="nav-item">
            <ActiveLinkComponent {...childProps} text='Testimonials'/>
          </li>
        </ul>

        <div>
        <p>{content}</p>
        {/* NEEDS TO CHANGE */}
        {/* Testimonials is centerd in screen and about is not */}
        <p className="right-align">IF TESTIMONIALS : NAME NAMESSON</p>
        {/* <p>Check out their website!</p>
        <p>LINK TO WEBSITE HERE</p> */}
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default PopupComponent;
