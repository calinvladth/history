import React from 'react'
import style from './index.module.sass'

class FormTitleContactComponent extends React.Component {
    render() {
        return (
            <div className={style.title}>
                <span>&nbsp;</span>
                <div>
                    <h1 className="font font__subtitle font__subtitle--big">Write a
                        message</h1>
                </div>

            </div>
        )
    }
}

export default FormTitleContactComponent