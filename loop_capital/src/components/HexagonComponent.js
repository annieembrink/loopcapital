//IMPORT CSS
import styles from '../styles/home/HexagonComponent.module.css';
//IMPORT COMPONENTS
import SvgHexComponent from './SvgHexComponent';
import SvgLineComponent from './SvgLineComponent';

const HexagonComponent = (props) => {
    const headline = props.props[0].title.rendered;
    return (

        <div className="text-align-center roboto-font margin-bottom">
            <h2>{headline}</h2>
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
                        <p className={`${styles.pheadline} roboto-font`}>{props.props[0].acf.headline_1}</p>
                        <p className={`${styles.description}`}>{props.props[0].acf.paragraph_1}</p>
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
                        <p className={`${styles.pheadline} roboto-font`}>{props.props[0].acf.headline_2}</p>
                        <p className={`${styles.description}`}>{props.props[0].acf.paragraph_2}</p>
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
                        <p className={`${styles.pheadline} roboto-font`}>{props.props[0].acf.headline_3}</p>
                        <p className={`${styles.description}`}>{props.props[0].acf.paragraph_3}</p>
                    </div>
                </div>

                {/* HEX 4 */}
                <div className={`${styles.onehexcontainer}`} data-aos="fade-right" data-aos-duration="1300">
                    <div className={`${styles.iconh1container} ${styles.hexdown}`}>
                        <SvgHexComponent className={`${styles.iconsize} green-text bootstrap-icon`} />
                        <h1 className={`${styles.absolute}`}>4</h1>
                    </div>
                    <div className={`${styles.contentdiv} ${styles.aligncenter}`}>
                        <p className={`${styles.pheadline} roboto-font`}>{props.props[0].acf.headline_4}</p>
                        <p className={`${styles.description}`}>{props.props[0].acf.paragraph_4}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default HexagonComponent;