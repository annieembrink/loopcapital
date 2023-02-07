import styles from '../styles/FooterComponent.module.css';
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import Image from 'next/image'



const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contentfooter}>
            <Image width={50} height={50} src='/images/loop_capital.png' className='logo' alt='loopcapital'/>
            <Link href="https://goo.gl/maps/uw36jsWnRxi91UBe9">Redaregatan 48, 252 36 Helsingborg</Link><br />
            <Link href="https://www.linkedin.com/company/loop-capital-ab/?trk=similar-pages"><Icon.Linkedin className={styles.iconTransparent}/></Link>
            </div>
            <p className={styles.small}>Rättigheter tillhör Tech Loop Capital AB - 559243 - 7791</p>
        </div>
    );
}

export default Footer;