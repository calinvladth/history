import React from 'react'
import './index.sass'
import Layout from "../../slots/page";

// FOF = 404
const FOF = () => {
    return (
        <Layout>
            <h1 className="fof__title">404</h1>
        </Layout>
    )
}

export default FOF