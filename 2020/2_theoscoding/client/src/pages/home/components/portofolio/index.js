import React from 'react'
import './index.sass'
import Button from "../small_components/button";
import ComponentSlot from "../../../../slots/component";
import FinancePresentation from '../../../../assets/images/finance.png'
import VrPresentation from '../../../../assets/images/vr.png'
import {withRouter} from "react-router-dom";
import {PresentationPathRQ} from "../../../portfolio_detailed/path";

const Portfolio = (props, {handleClick, active}) => (
    <ComponentSlot background={'#fbf7f2'} id={'portfolio'}>
        {/*Position absolute / Outside container*/}

        <div className="portfolio">
            <div className="portfolio__content">
                <div className="portfolio__content--word"></div>

                {/*The Actual Portfolio*/}

                <div className="portfolio__content--box">
                    <div className="portfolio__content--number"><span className="portfolioNumber">04</span></div>
                    <div className="portfolio__content--color"></div>
                    <div className="portfolio__content--word"><span className="portfolioWord">portfolio</span></div>

                    <div className="presentation" onClick={() => props.history.push(`${PresentationPathRQ}/1001`)}>
                        <img src={FinancePresentation} alt="" className="presentation__img"/>
                    </div>
                    <div className="presentation" onClick={() => props.history.push(`${PresentationPathRQ}/1002`)}>
                        <img src={VrPresentation} alt="" className="presentation__img"/>
                    </div>

                </div>

                {/*Action Button*/}

                <div className="portfolio__content--button">
                    <Button handleClick={handleClick} next={'contact'} dark={true}/>
                </div>

            </div>
        </div>

    </ComponentSlot>


)

export default withRouter(Portfolio)
