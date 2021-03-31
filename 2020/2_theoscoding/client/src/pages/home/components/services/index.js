import React from 'react'
import './index.sass'
import Button from "../small_components/button";
import ComponentFullSlot from "../../../../slots/component_full";

const Services = ({active, handleClick}) => (
    <ComponentFullSlot id={'services'}>
        <div className="services">
            <div className="servicesTitleAnimationBox">
                <h3 className="servicesTitleAnimation">My skills</h3>
            </div>
            <div className="services__leftcontent">
                <div className="services__leftcontent--number">
                    <span className="servicesNumber">03</span>
                </div>
                <div className="services__leftcontent--text">
                    <h3 className="servicesTitle">Front-end</h3>
                    <h5 className="servicesSubtitle">React ( Redux )</h5>
                    <h5 className="servicesSubtitle">Vue ( Vuex )</h5>
                    <h5 className="servicesSubtitle">Angular</h5>
                </div>
            </div>
            <div className="services__rightcontent">
                <div className="services__rightcontent--text">
                    <h3 className="servicesTitle servicesTitle--light">Back-end</h3>
                    <h5 className="servicesSubtitle servicesSubtitle--light">NodeJs ( Express )</h5>
                    <h5 className="servicesSubtitle servicesSubtitle--light">Django ( Rest Framework )</h5>
                    <h5 className="servicesSubtitle servicesSubtitle--light">3</h5>
                </div>
                <div className="services__rightcontent--button">
                    <Button handleClick={handleClick} next={'portfolio'} dark={true}/>
                </div>

            </div>

        </div>
    </ComponentFullSlot>

)

export default Services
