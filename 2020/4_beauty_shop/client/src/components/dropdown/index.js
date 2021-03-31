import React from 'react'
import style from './index.module.sass'
import DownSvg from "../../assets/icons/down_svg";


const Dropdown = (props) => {
    const {fontSize = 14, color = true, defaultName, selected, setSelected, options} = props

    function borderStyle() {
        let borderColor = style.borderDarkGrey
        if (color) borderColor = style.borderSkinDark

        return borderColor
    }

    return (
        <div className={style.select}>
            <div className={`${style.selected} ${borderStyle()}`}>
                <p className={`f-${fontSize}`}>{selected.name ? selected.name : defaultName}</p>
                <div>
                    <DownSvg/>
                </div>
            </div>
            <div className={`${style.options} ${borderStyle()}`}>
                {
                    options.map(o =>
                        <div key={o.id} onClick={() => setSelected(o)}>
                            <p className={`f-${fontSize - 1}`}>
                                {
                                    o.id === selected.id
                                        ?
                                        <span className={`f-${fontSize - 1} ${style.active}`}>{o.name}</span>
                                        :
                                        o.name
                                }
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Dropdown