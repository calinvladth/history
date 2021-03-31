import React from "react";
import style from './index.module.sass'
import SearchSvg from "../../assets/icons/search_svg";
import CancelSvg from "../../assets/icons/cancel_svg";

const SearchComponent = ({name = '', setName = ''}) => {


    return (
        <div className={style.search}>
            <input type="text" placeholder="Search products ..." value={name} className="f-15"
                   onChange={(e) => setName(e.target.value)}/>
            <div className={name.length !== 0 ? style.cancel : null}
                 onClick={() => setName('')}>
                {
                    name.length === 0 ? <SearchSvg/> : <CancelSvg className={style.cancel}/>
                }
            </div>
        </div>
    )
}

export default SearchComponent