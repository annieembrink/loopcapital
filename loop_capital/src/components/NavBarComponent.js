import Link from 'next/link'

const NavBarComponent = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBarComponent;