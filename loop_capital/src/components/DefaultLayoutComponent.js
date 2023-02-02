import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const DefaultLayoutComponent = ({ children }) => {
    return (
        <>
            <HeaderComponent/>
            <main>{children}</main>
            <FooterComponent/>
        </>
    );
}

export default DefaultLayoutComponent;