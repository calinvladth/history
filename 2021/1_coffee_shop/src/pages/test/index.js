import React from 'react'
import './index.sass'
import ComponentMaxWidthSlot from "../../slots/component_max_width";
import {ButtonDocs} from "./docs/button";
import {TitleDocs} from "./docs/title";
import {ParagraphDocs} from "./docs/paragraph";
import {InputDocs} from "./docs/input";
import {TextareaDocs} from "./docs/textarea";
import ProductComponent from "../../components/product";

const TestPage = () => {
    return (
        <ComponentMaxWidthSlot>
            <div className="testPage">
                <div className="testPage__doc"><TitleDocs/></div>
                <div className="testPage__doc"><ParagraphDocs/></div>
                <div className="testPage__doc"><ButtonDocs/></div>
                <div className="testPage__doc"><InputDocs/></div>
                <div className="testPage__doc"><TextareaDocs/></div>

                <ProductComponent/>
            </div>
        </ComponentMaxWidthSlot>
    )
}

export default TestPage
