import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";

const DefaultLayoutComponent = ({ children }) => {
    return (
        <>
            <NavBarComponent />
            <main>{children}</main>
            <FooterComponent />
        </>
    );
}

export default DefaultLayoutComponent;