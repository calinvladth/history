import React from 'react'
import './index.sass'

const MatterportIframeComponent = ({link}) => (
    <div className="matterport__container">
        <div className="matterport__scan">
            <iframe id="my_iframe" src={`${link}&play=1&qs=1&brand=0&fs=1`} width="100%" height="100%"
                    frameBorder="0" title={link}
                    allowFullScreen={true}></iframe>
        </div>
    </div>
)

export default MatterportIframeComponent