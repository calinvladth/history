import React from 'react'
import data from './data.json'
import {Link, withRouter} from "react-router-dom";
import ComponentSlot from "../../slots/component";
import {HomePath} from "../home/path";
import './index.sass'
import LeftArrow from '../../assets/icons/left-arrow.svg'


const PresentationPage = (props) => {
    const id = parseInt(props.match.params.id)
    let portfolio = {}
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            portfolio = data[i]
        }
    }

    const doesProjectExist = Object.keys(portfolio).length !== 0

    if (!doesProjectExist) {
        props.history.push(HomePath)
    }

    return (
        <ComponentSlot>
            {
                doesProjectExist
                    ?
                    <div className="presentationComponent">
                        <Link to={HomePath} className="presentationComponent__go_back"><img src={LeftArrow}
                                                                                            alt=""/></Link>
                        <h1 className="presentationComponent__title1" onClick={() => alert(1)}>Project
                            Name: {portfolio.project}</h1>
                        <p className="presentationComponent__paragraph">
                            {`${portfolio.short_description}`}</p>
                        <br/>
                        <br/>
                        <h2 className="presentationComponent__title2">Technologies</h2>
                        <p className="presentationComponent__paragraph">Front: {portfolio.technologies.front}</p>
                        <p className="presentationComponent__paragraph">Back: {portfolio.technologies.back}</p>
                        <p className="presentationComponent__paragraph">Database: {portfolio.technologies.db}</p>
                        <br/>
                        <br/>
                        <h2 className="presentationComponent__title2">Deploy</h2>
                        <p className="presentationComponent__paragraph">SSL: {portfolio.technologies.ssl}</p>
                        <p className="presentationComponent__paragraph">Virtual
                            server: {portfolio.technologies.virtual_machine}</p>
                        <p className="presentationComponent__paragraph">Reverse
                            Proxy: {portfolio.technologies.reverse_proxy}</p>
                        <br/>
                        <br/>
                        <div className="presentationComponent__link">
                            <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                                <button className="presentationComponent__button">Link</button>
                            </a>
                        </div>

                    </div>
                    :
                    <div>
                        <h1>This project does not exist.</h1>
                    </div>
            }

        </ComponentSlot>
    )
}

export default withRouter(PresentationPage)