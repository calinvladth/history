import React from 'react'
import './index.sass'
import Profile from '../../../../assets/images/profile.jpg'
import Button from "../small_components/button";
import LogoPng from '../../../../assets/icons/logo.png'
import Lines_1 from '../../../../assets/icons/1.svg'
import Lines_2 from '../../../../assets/icons/2.svg'
import ScrollBox from "../small_components/scroll";
import ComponentFullSlot from "../../../../slots/component_full";


const Home = ({handleClick, active, components}) => {

    return (
        <ComponentFullSlot id={'home'}>
            <div className="home">
                <img className="homeLines2" src={Lines_2} alt=""/>
                <div className="home__leftcontent">
                    <div className="home__leftcontent--logo">
                        <img className="homeLogo" src={LogoPng} alt=""/>
                        <img className="homeLines1" src={Lines_1} alt=""/>
                    </div>
                    <div className="home__leftcontent--number">
                        <span className="number">01</span>
                    </div>
                    <div className="home__leftcontent--text">
                        <h1 className="title">Hello,</h1>
                        <h1 className="title">I'm Theodor Calin</h1>
                        <h1 className="title">WEB DEVELOPER .</h1>
                    </div>
                    <div className="home__leftcontent--button">
                        <Button next={'about'} handleClick={handleClick}/>
                    </div>
                </div>
                <div className="home__rightcontent">
                    <div className="navbar">
                        {components.map(component =>
                            <li className="navbar__link" key={component}
                                onClick={() => handleClick(component)}>{component}</li>
                        )}
                    </div>
                    <div className="home__rightcontent--img">
                        <img className="img" src={Profile} alt=""/>
                    </div>
                </div>
                <div className="home__scrollBox">
                    <ScrollBox/>
                </div>
            </div>
        </ComponentFullSlot>
    )
}

export default Home
