import React from "react";

const ArrowSvg = () => {
    const style = {
        width: '100%',
        height: '100%',
        enableBackground: 'new 0 0 511.997 511.997',
        fill: '#000000'
    }
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             viewBox="0 0 511.997 511.997" style={style} xmlSpace="preserve">
            <path d="M511.228,134.699c-1.615-4.052-5.542-6.698-9.896-6.698h-42.667c-2.729,0-5.354,1.042-7.333,2.927L255.999,315.97
			L60.665,130.928c-1.979-1.885-4.604-2.927-7.333-2.927H10.665c-4.354,0-8.281,2.646-9.896,6.698
			c-1.625,4.042-0.625,8.667,2.521,11.677l245.333,234.667c4.125,3.938,10.625,3.938,14.75,0l245.333-234.667
			C511.853,143.366,512.853,138.741,511.228,134.699z"/>
        </svg>
    )
}

export default ArrowSvg