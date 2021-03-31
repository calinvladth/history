import React from "react";
import style from "./index.module.sass";

const AccountPageOptions = ({options, currentOption, setCurrentOption}) => {
    return (
        <div className={style.box}>
            <div className={style.boxOptions}>
                {
                    options.map(o => <div key={o.name}
                                          className={o.name === currentOption.name ? style.optionActive : null}
                                          onClick={() => setCurrentOption(o)}>
                        <h1 className="center f-14 lts-2">{o.name}</h1>
                    </div>)
                }
            </div>
        </div>
    )
}

export default AccountPageOptions