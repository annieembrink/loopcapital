// import {useState} from 'react';
// import Modal from 'react-bootstrap/Modal';

// const PopupComponent = ({setShowPopup, popupCompany}) => {

//     const [chosenLink, setChosenLink] = useState('About')
//     const [chosenStyle, setChosenStyle] = useState('underline')
//     const [showContent, setShowContent] = useState(false)

//     const closeButton = () => {
//         setShowPopup(false)
//     }

//     const chooseLink = (e) => {
//         setChosenLink(e.target.textContent)
//         if(e.target.textContent !== chosenLink) {
//             setShowContent(!showContent)
//         }
//     }

//     return ( 
       

//         <div style={{
//             backgroundColor: 'white',
//             position: 'fixed',
//             width: '100%',
//             height: '400px',
//             zIndex: '1000',
//             opacity: '100'
//         }}>

//         <p onClick={closeButton} style={{
//             color: 'black',
//             position: 'absolute',
//             right: '5px',
//             top: '5px'
//         }}>Close</p>

//         <div style={{
//             backgroundImage: `url(${popupCompany.acf.image_of_the_company})`,
//             width: '100%',
//             height: '200px',
//         }}></div>

//         <ul>
//             <li style={{textDecoration: chosenLink === 'About' ? chosenStyle : null}} onClick={(e) => chooseLink(e)}>About</li>
//             <li style={{textDecoration: chosenLink === 'Testimonials' ? chosenStyle : null}} onClick={(e) => chooseLink(e)}>Testimonials</li>
//         </ul>

//         <div hidden={showContent}>
//             About content
//         </div>

//         <div hidden={!showContent}>
//             Testimonials
//         </div>

//         </div>

        
//      );
// }
 
// export default PopupComponent;

import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import styles from '../styles/portfolio/PopupComponent.module.css'

const PopupComponent = ({showPopup, setShowPopup, popupCompany}) => {

  const [chosenLink, setChosenLink] = useState('About')
  const [chosenStyle, setChosenStyle] = useState('underline')
  const [showContent, setShowContent] = useState(false)

  const closeButton = () => {
    setShowPopup(false)
  }

  const chooseLink = (e) => {
    setChosenLink(e.target.textContent)
    if(e.target.textContent !== chosenLink) {
      setShowContent(!showContent)
    }
  }

  return ( 
    <Modal className='modal-xl' show={showPopup} onHide={closeButton}>
      <Modal.Header closeButton>
        <Modal.Title>{popupCompany.title.rendered}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <img src={popupCompany.acf.image_of_the_company} alt={popupCompany.title.rendered} width={500} height={500} /> */}
        <Image width={500} height={500} src='/images/prisma.jpg' className='img-carousel' alt='Prismahuset'/>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={`nav-link ${chosenLink === 'About' ? chosenStyle : ''}`} onClick={chooseLink}>About</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${chosenLink === 'Testimonials' ? chosenStyle : ''}`} onClick={chooseLink}>Testimonials</a>
          </li>
        </ul>
        <div hidden={showContent}>
          About content. About content. About content. About content. About content. About content. About content. About content. About content.
        </div>
        <div hidden={!showContent}>
          Testimonials content. Testimonials content. Testimonials content. Testimonials content. Testimonials content. Testimonials content. Testimonials content.
        </div>
      </Modal.Body>
    </Modal>
  );
}
 
export default PopupComponent;
