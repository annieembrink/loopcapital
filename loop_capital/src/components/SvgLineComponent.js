const SvgLineComponent = () => {
    return ( 
        <svg width="135" height="95" viewBox="0 0 135 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_660_3)">
                <path d="M114.272 69.0527L21.2344 18.0003" stroke="#409250" stroke-width="4"/>
            </g>
            <defs>
                <filter id="filter0_d_660_3" x="0.633789" y="0.135742" width="134.239" height="94.7822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.796078 0 0 0 0 0.847059 0 0 0 0 0.807843 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_660_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_660_3" result="shape"/>
                </filter>
            </defs>
        </svg>
     );
}
 
export default SvgLineComponent;