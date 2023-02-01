import HeaderComponent from "./HeaderComponent";

const DefaultLayoutComponent = ({children}) => {
    return ( 
    <>
    <HeaderComponent/>
    <main>{children}</main>
    </> 
    );
}
 
export default DefaultLayoutComponent;