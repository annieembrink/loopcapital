import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/portfolio/PopupComponent.module.css';

const PopupComponent = ({ showPopup, setShowPopup, popupCompany }) => {

  const [chosenLink, setChosenLink] = useState('About')
  const [chosenStyle, setChosenStyle] = useState('underline')
  const [content, setContent] = useState(popupCompany.acf.about)

  const closeButton = () => {
    setShowPopup(false)
  }

  const chooseLink = (e) => {
    if (e.target.textContent !== chosenLink) {
      setChosenLink(e.target.textContent)
    }

    if (e.target.textContent === 'About') {
      setContent(popupCompany.acf.about)
    } else {
      setContent(popupCompany.acf.testimonial)
    }
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
            <a className={`nav-link`} style={{ textDecoration: chosenLink === 'About' ? chosenStyle : null }} onClick={chooseLink}>About</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link`} style={{ textDecoration: chosenLink === 'Testimonials' ? chosenStyle : null }} onClick={chooseLink}>Testimonials</a>
          </li>
        </ul>

        <div>{content}</div>

      </Modal.Body>
    </Modal>
  );
}

export default PopupComponent;
