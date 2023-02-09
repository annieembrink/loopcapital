import styles from '../styles/home/HexagonComponent.module.css';
import SvgHexComponent from './SvgHexComponent';
import SvgLineComponent from './SvgLineComponent';

const HexagonComponent = () => {

    return ( 

        <div className={`${styles.hexcomponentcontainer}`}>

        {/* HEX 1 */}
        <div className={`${styles.onehexcontainer}`}>
            <div className={`${styles.relative}`}>
                <div data-aos="fade-right" data-aos-duration="400" className={`${styles.iconh1container}`}>
                    <SvgHexComponent/>
                    <h1 className={`${styles.absolute}`}>1</h1>
                </div>
                <SvgLineComponent/>
            </div>

            <div className={`${styles.contentdiv} ${styles.aligncenter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        {/* HEX 2 */}
        <div className={`${styles.onehexcontainer}`}>
            <div data-aos="fade-right" data-aos-duration="700" className={`${styles.iconh1container} ${styles.hexdown}`}>
                <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`}/>
                <h1 className={`${styles.absolute}`}>2</h1>
            </div>
            <div className={`${styles.contentdiv} ${styles.aligncenter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        {/* HEX 3 */}
        <div className={`${styles.onehexcontainer}`}>
            <div data-aos="fade-right" data-aos-duration="1000" className={`${styles.iconh1container}`}>
                <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`}/>
                <h1 className={`${styles.absolute}`}>3</h1>
            </div>
            <div className={`${styles.contentdiv} ${styles.aligncenter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        {/* HEX 4 */}
        <div className={`${styles.onehexcontainer}`}>
            <div data-aos="fade-right" data-aos-duration="1300" className={`${styles.iconh1container} ${styles.hexdown}`}>
                <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`}/>
                <h1 className={`${styles.absolute}`}>4</h1>
            </div>
            <div className={`${styles.contentdiv} ${styles.aligncenter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        </div>

     );
}
 
export default HexagonComponent;