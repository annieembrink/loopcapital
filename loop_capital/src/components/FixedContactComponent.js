// IMPORTS CSS
import styles from '../styles/FixedContactComponent.module.css';
// IMPORTS REACT/NEXT
import Link from "next/link";

const FixedContactComponent = () => {
    return (
        <div className={styles.contact} >
            <Link href="/contact">Get in contact!</Link>
        </div>
    );
}
export default FixedContactComponent;