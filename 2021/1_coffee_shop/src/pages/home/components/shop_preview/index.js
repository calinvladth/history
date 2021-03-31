import React from 'react'
import style from './index.module.sass'
import {data} from './data'
import {Link} from "react-router-dom";
import {setBackgroundImage} from "../../../../services/image";

const ShopPreviewComponent = () => <div className={style.box}>
    {
        data.map(o => <div key={o.id}>
            <Link to={o.link} className={style.preview}>
                <div className={style.previewImage}
                     style={setBackgroundImage(o.image)}>
                </div>
                <div className={style.previewTitle}>
                    <h1 className="font font__subtitle">
                        {o.name}
                    </h1>
                </div>
            </Link>
        </div>)
    }
</div>

export default ShopPreviewComponent