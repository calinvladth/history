import React from 'react'
import '../index.sass'
import Layout from "../../../slots/page";
import HeaderSlot from "../../../slots/header";

const Cookie = () => (
    <Layout>
        <HeaderSlot title={'Cookie Policy'}/>
        <h1>Cookie</h1>
    </Layout>
)

export default Cookie