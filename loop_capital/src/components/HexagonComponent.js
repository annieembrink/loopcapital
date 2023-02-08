import styles from '../styles/home/HexagonComponent.module.css';
import * as Icon from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react';

const HexagonComponent = () => {

//     const hexRef = useRef(null);
//     const hexRef1 = useRef(null);
//     const hexRef2 = useRef(null);
//     const [hexHeight, setHexHeight] = useState(0);
//     const [hexDistance, setHexDistance] = useState(0);

//   useEffect(() => {
//     const hex1 = hexRef1.current;
//     const hex2 = hexRef2.current;

//     const distance = hex2.offsetTop - hex1.offsetTop;
//     setHexDistance(distance)

//     console.log(distance);
//   }, []);

//     useEffect(() => {
//         setHexHeight(hexRef1.current.offsetHeight);
//     }, []);
    
//     console.log(hexHeight, hexDistance)
    return ( 

        <div className={`${styles.flex}`}>
        <div data-aos="fade-right" data-aos-duration="400" className={`${styles.divsize}`}>
        <Icon.Hexagon className={`${styles.iconsize} green-text bootstrap-icon`}/>
        <h1 className={`${styles.absolute}`}>1</h1>
        </div>
        <div data-aos="fade-right" data-aos-duration="700" className={`${styles.divsize}`}>
        <Icon.Hexagon className={`${styles.iconsize} green-text bootstrap-icon`}/>
        <h1 className={`${styles.absolute}`}>2</h1>

        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className={`${styles.divsize}`}>
        <Icon.Hexagon className={`${styles.iconsize} green-text bootstrap-icon`}/>
        <h1 className={`${styles.absolute}`}>3</h1>

        </div>
        <div data-aos="fade-right" data-aos-duration="1300" className={`${styles.divsize}`}>
        <Icon.Hexagon className={`${styles.iconsize} green-text bootstrap-icon`}/>
        <h1 className={`${styles.absolute}`}>4</h1>

        </div>
        </div>

    //     <div style={{minHeight: '400px'}}>
    //     <h2 className={styles.textalign}>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>
    // <div className={`${styles.width100}`}>

    //     <div>
    //         <div ref={hexRef1} className={`${styles.hexagon} ${styles.hex1}`}>
    //             <h1 className={styles.textalign}>1</h1>
    //         </div>
    //         <div className={`${styles.line1}`} style={{width: hexDistance*1.5, height: hexDistance}}></div>
    //     </div>
            
    //     <div>
    //        <div ref={hexRef2} className={`${styles.hexagon} ${styles.hex2}`} style={{top: hexHeight*2}}>
    //             <h1 className={styles.textalign}>2</h1>
    //         </div>
    //         <div className={`${styles.line2}`} style={{width: hexDistance*1.5, height: hexDistance}}></div>
    //     </div>  

    //     <div>
    //         <div className={`${styles.hexagon} ${styles.hex3}`}>
    //             <h1 className={styles.textalign}>3</h1>
    //         </div>
    //         <div className={`${styles.line3}`} style={{width: hexDistance*1.5, height: hexDistance}}></div>
    //     </div>

    //     <div>
    //         <div className={`${styles.hexagon} ${styles.hex4}`} style={{top: hexHeight*2}}>
    //             <h1 className={styles.textalign}>4</h1>
    //         </div>
    //     </div>


    //     </div>

    //   </div>



     );
}
 
export default HexagonComponent;