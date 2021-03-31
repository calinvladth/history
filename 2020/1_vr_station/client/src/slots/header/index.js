import {Helmet} from "react-helmet/es/Helmet";
import React from 'react'

const HeaderSlot = ({title}) => (
    <Helmet>
        <title>{title}</title>
    </Helmet>
)

export default HeaderSlot