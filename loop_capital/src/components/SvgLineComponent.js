// IMPORT CSS
import styles from '../styles/home/HexagonComponent.module.css';

const SvgLineComponent = () => {
    return ( 
        <svg className={`${styles.absoluteline}`} width="106" height="4" viewBox="0 0 106 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2" x2="106" y2="2" stroke="#409250" strokeWidth="4"/>
        </svg>
     );
}
 
export default SvgLineComponent;