import React from 'react'
import './index.sass'
import api from "../../../../env"

const PreviewComponent = ({o, goToScan}) => (
    <div className="scans__container" key={o.id}>
        <div className="scans__container--preview" onClick={() => goToScan(o.id)}>
            <img className="scan__image" src={`${api}/static/${o.image}`} alt=""/>
        </div>
        <div className="scans__container--name">
            <h1 className="scan__title">{o.name}</h1>
        </div>
    </div>
)

export default PreviewComponent