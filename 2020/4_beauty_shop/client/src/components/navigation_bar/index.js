import React, {useState} from "react";
import style from './index.module.sass'
import NavigationBarIcons from "./icons";
import NavigationBarLogo from "./logo";
import NavigationBarLinks from "./links";
import NavigationBarTooltip from "./tooltip";

const NavigationBar = () => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [activeIcon, setActiveIcon] = useState({})

    function resetTooltip() {
        setShowTooltip(false)
        setActiveIcon({})
    }

    return (
        <div className={style.box} onMouseLeave={() => resetTooltip()}>
            <div className={style.boxContent}>
                <div>
                    <NavigationBarLogo/>
                </div>
                <div>
                    <NavigationBarLinks/>
                </div>
                <div>
                    <NavigationBarIcons showTooltip={showTooltip} setShowTooltip={setShowTooltip}
                                        activeIcon={activeIcon} setActiveIcon={setActiveIcon}/>
                </div>
            </div>
            <NavigationBarTooltip show={showTooltip}>{activeIcon.component}</NavigationBarTooltip>
        </div>

    )
}

export default NavigationBar