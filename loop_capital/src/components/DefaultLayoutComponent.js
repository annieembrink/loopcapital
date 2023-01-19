import NavBarComponent from "./NavBarComponent";

const DefaultLayoutComponent = ({children}) => {
    return ( 
    <>
    <NavBarComponent/>
    <main>{children}</main>
    </> 
    );
}
 
export default DefaultLayoutComponent;