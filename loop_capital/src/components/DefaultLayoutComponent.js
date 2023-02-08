import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import FixedContactComponent from "./FixedContactComponent";
import Head from 'next/head';

const DefaultLayoutComponent = ({ children }) => {

    
    return (
        <>
            <Head>
                <title>
                    iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                </title>
                <meta
                    name="description"
                    content="testing"
                    key="testing"
                />
            </Head>

            <HeaderComponent/>
            <FixedContactComponent/>
            <main>{children}</main>
            <FooterComponent/>
        </>
    );
}

export default DefaultLayoutComponent;