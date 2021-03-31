import React, {useState} from "react";
import style from './index.module.sass'

const DetailedView = (props) => {
    const {options} = props

    const [current, setCurrent] = useState(options[0])

    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                {
                    options.map(o => <h2 key={o.name}
                                         className={`f-15 uppercase normal ${o.name === current.name && style.boxTitleActive}`}
                                         onClick={() => setCurrent(o)}>{o.name}</h2>)
                }
            </div>
            <div>
                {
                    options.map(o => {
                        if (o.name === current.name) return <div key={o.name}>{o.component}</div>
                    })
                }
            </div>
        </div>
    )
}

export default DetailedView