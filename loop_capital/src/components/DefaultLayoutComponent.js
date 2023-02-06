import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import FixedContactComponent from "./FixedContactComponent";

const DefaultLayoutComponent = ({ children }) => {
    return (
        <>
            <HeaderComponent/>
            <FixedContactComponent/>
            <main>{children}</main>
            <FooterComponent/>
        </>
    );
}

export default DefaultLayoutComponent;