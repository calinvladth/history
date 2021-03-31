import React, {useState} from "react";
import style from './index.module.sass'
import CancelSvg from "../../assets/icons/cancel_svg";
import SearchSvg from "../../assets/icons/search_svg";
import {withRouter} from "react-router-dom";

const SearchProductsPage = (props) => {

    let params = new URLSearchParams(props.location.search)
    let search = params.get('search')

    const [text, setText] = useState('')

    function send(text) {
        if (text) {
            alert(`SEND ${text}`)
            setText('')
        }
    }

    function close() {
        props.history.push(props.location.pathname)
    }

    function handleAction(e) {
        if (e.key === 'Enter') send(text)
        if (e.key === 'Escape') close()
    }

    if (search) {
        return (
            <div className={style.box} onKeyDown={(e) => handleAction(e)}>
                <div className={style.boxContent}>
                    <div className={style.boxCancel} onClick={() => close()}>
                        <CancelSvg/>
                    </div>
                    <div className={style.boxSearch}>
                        <div className={style.boxSearchTitle}>
                            <h1 className="f-20 lts-3 uppercase normal">Search</h1>
                        </div>
                        <div className={style.boxSearchInput}>
                            <input type="text" value={text} className="input-box lts-2" placeholder="Search product ..."
                                   onChange={(e) => setText(e.target.value)}/>
                        </div>
                        <div className={`${style.boxSearchIcon} ${text && style.boxSearchIconActive}`}>
                            <span onClick={() => send(text)}>
                                <SearchSvg/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }


}

export default withRouter(SearchProductsPage)