import React from "react";

export default class MagnifyGlassSVG extends React.Component {
    render() {
        const style = {
            width: '100%',
            height: '100%',
            enableBackground: 'new 0 0 512 512',
            fill: this.props.color
        }

        return (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 512 512" style={style} xmlSpace="preserve">
                <g>
                    <path d="M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z
			 M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667
			S302.646,384,202.667,384z"/>
                </g>
            </svg>
        )
    }
}