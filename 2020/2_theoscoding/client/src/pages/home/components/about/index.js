import React from 'react'
import './index.sass'
import Button from "../small_components/button";
import LaptopImg from '../../../../assets/images/button_img.jpg'
import Lines_3 from '../../../../assets/icons/5.svg'
import Lines_4 from '../../../../assets/icons/4.svg'
import ComponentSlot from "../../../../slots/component";

const About = ({active, handleClick}) => (
    <ComponentSlot background={'#070707'} id={'about'}>
        {/*Position Absolute / Items outside the component*/}
        <div className="about">
            <img className="aboutLines3" src={Lines_3} alt=""/>
            <div className="about__leftcontent">
                <div className="about__leftcontent--boximg">
                    <img className="aboutLaptopImg" src={LaptopImg} alt=""/>
                    <img className="aboutLines4" src={Lines_4} alt=""/>
                </div>
            </div>

            <div className="about__rightcontent">
                <div className="about__rightcontent--number"><span className="aboutNumber">02</span></div>
                <div className="about__rightcontent--text">
                    <h3 className="aboutTitle">Hi again, nice to meet you .</h3>
                    <h5 className="aboutSubtitle">Lorem ipsum dolor sit amet, consetetur sadipscing</h5>
                    <h5 className="aboutSubtitle">Lorem ipsum dolor sit amet, consetetur sadipscing</h5>
                    <h5 className="aboutSubtitle">Lorem ipsum dolor sit amet, consetetur sadipscing</h5>
                    <h5 className="aboutSubtitle">Lorem ipsum dolor sit amet, consetetur sadipscing</h5>
                </div>
                <div className="about__rightcontent--button">
                    <Button next={'services'} handleClick={handleClick}/>
                </div>
            </div>
        </div>

    </ComponentSlot>

)

export default About
