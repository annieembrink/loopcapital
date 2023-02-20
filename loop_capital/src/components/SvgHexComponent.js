// IMPORT CSS
import styles from '../styles/home/HexagonComponent.module.css';

const SvgHexComponent = () => {
    return ( 
    <svg className={`${styles.iconsize} green-text bootstrap-icon`} width="117" height="126" viewBox="0 0 117 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_655_2)">
            <path d="M58.2813 101.001C57.337 101.005 56.408 100.763 55.5859 100.298L22.7734 81.7436C21.9305 81.2661 21.2295 80.5733 20.7422 79.7359C20.2548 78.8986 19.9987 77.9468 20 76.978V40.0249C19.9987 39.056 20.2548 38.1043 20.7422 37.2669C21.2295 36.4296 21.9305 35.7367 22.7734 35.2592L55.5859 16.7046C56.4092 16.2426 57.3373 16 58.2813 16C59.2252 16 60.1533 16.2426 60.9766 16.7046L93.7891 35.2592C94.6321 35.7367 95.3331 36.4296 95.8204 37.2669C96.3077 38.1043 96.5638 39.056 96.5625 40.0249V76.978C96.5638 77.9468 96.3077 78.8986 95.8204 79.7359C95.3331 80.5733 94.6321 81.2661 93.7891 81.7436L60.9766 100.298C60.1546 100.763 59.2255 101.005 58.2813 101.001ZM58.2813 20.6889L57.8906 20.7671L25.0781 39.3217C24.9581 39.3955 24.8591 39.499 24.7907 39.6221C24.7223 39.7453 24.6868 39.884 24.6875 40.0249V76.978C24.6868 77.1189 24.7223 77.2576 24.7907 77.3807C24.8591 77.5039 24.9581 77.6073 25.0781 77.6811L57.8906 96.2358C58.0125 96.2946 58.146 96.3252 58.2813 96.3252C58.4165 96.3252 58.5501 96.2946 58.6719 96.2358L91.4844 77.6811C91.6044 77.6073 91.7034 77.5039 91.7718 77.3807C91.8402 77.2576 91.8758 77.1189 91.875 76.978V40.0249C91.8758 39.884 91.8402 39.7453 91.7718 39.6221C91.7034 39.499 91.6044 39.3955 91.4844 39.3217L58.6719 20.7671L58.2813 20.6889Z" fill="#409250"/>
        </g>
        <defs>
            <filter id="filter0_d_655_2" x="0" y="0" width="116.562" height="125.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.796078 0 0 0 0 0.847059 0 0 0 0 0.807843 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_655_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_655_2" result="shape"/>
            </filter>
        </defs>
    </svg>
    );
}
 
export default SvgHexComponent;