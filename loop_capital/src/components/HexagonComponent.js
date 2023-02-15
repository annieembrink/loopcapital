import styles from '../styles/home/HexagonComponent.module.css';
import SvgHexComponent from './SvgHexComponent';
import SvgLineComponent from './SvgLineComponent';

const HexagonComponent = () => {

    return (

        <div className="text-align-center roboto-font margin-bottom">

        <h2>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>

        <div className={`${styles.hexcomponentcontainer}`}>

            {/* HEX 1 */}
            <div className={`${styles.onehexcontainer}`} data-aos="fade-right" data-aos-duration="400">
                <div className={`${styles.relative}`}>
                    <div className={`${styles.iconh1container}`}>
                        <SvgHexComponent />
                        <h1 className={`${styles.absolute}`}>1</h1>
                    </div>
                    <SvgLineComponent />

                </div>

                <div className={`${styles.contentdiv} ${styles.aligncenter}`}>
                    <p className={`${styles.pheadline} roboto-font`}>Contact</p>
                    <p className={`${styles.description}`}>The journey starts with a contact.</p>
                </div>
            </div>

            {/* HEX 2 */}
            <div className={`${styles.onehexcontainer}`} data-aos="fade-right" data-aos-duration="700">
                <div className={`${styles.relative}`}>
                    <div className={`${styles.iconh1container} ${styles.hexdown}`}>
                        <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`} />
                        <h1 className={`${styles.absolute}`}>2</h1>
                    </div>
                    <SvgLineComponent />
                </div>
                <div className={`${styles.contentdiv} ${styles.aligncenter}`}>
                    <p className={`${styles.pheadline} roboto-font`}>Pitch</p>
                    <p className={`${styles.description}`}>Time to pitch your idea.</p>
                </div>
            </div>

            {/* HEX 3 */}
            <div className={`${styles.onehexcontainer}`} data-aos="fade-right" data-aos-duration="1000">
                <div className={`${styles.relative}`}>
                    <div data-aos="fade-right" data-aos-duration="1000" className={`${styles.iconh1container}`}>
                        <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`} />
                        <h1 className={`${styles.absolute}`}>3</h1>
                    </div>
                    <SvgLineComponent />
                </div>
                <div className={`${styles.contentdiv} ${styles.aligncenter}`}>
                    <p className={`${styles.pheadline} roboto-font`}>Meet</p>
                    <p className={`${styles.description}`}>Meet the investment network of Loop Capital.</p>
                </div>
            </div>

            {/* HEX 4 */}
            <div className={`${styles.onehexcontainer}`} data-aos="fade-right" data-aos-duration="1300">
                    <div className={`${styles.iconh1container} ${styles.hexdown}`}>
                        <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`} />
                        <h1 className={`${styles.absolute}`}>4</h1>
                    </div>
                <div className={`${styles.contentdiv} ${styles.aligncenter}`}>
                    <p className={`${styles.pheadline} roboto-font`}>Investment</p>
                    <p className={`${styles.description}`}>Investment from Loop Capital and direct investment from individual investors.</p>
                </div>
            </div>

        </div>
        </div>


    );
}

export default HexagonComponent;