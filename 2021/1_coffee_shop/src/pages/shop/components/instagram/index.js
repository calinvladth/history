import React from 'react'
import style from './index.module.sass'
import Instagram1JPG from '../../../../assets/images/instagram_1.jpg'
import Instagram2JPG from '../../../../assets/images/instagram_2.jpg'
import Instagram3JPG from '../../../../assets/images/instagram_3.jpg'
import Instagram4JPG from '../../../../assets/images/instagram_4.jpg'
import Instagram5JPG from '../../../../assets/images/instagram_5.jpg'
import Instagram6JPG from '../../../../assets/images/instagram_6.jpg'

const data = [
    {id: 1, image: Instagram1JPG},
    {id: 2, image: Instagram2JPG},
    {id: 3, image: Instagram3JPG},
    {id: 4, image: Instagram4JPG},
    {id: 5, image: Instagram5JPG},
    {id: 6, image: Instagram6JPG},
]

class InstagramShopComponent extends React.Component {
    render() {
        return (
            <div className={style.box}>
                <h1 className="title title--gradient title--regular">Follow us on instagram</h1>
                <div className={style.content}>
                    {
                        data.map(o => <div className={style.contentImage}
                                           style={setBackgroundImage(o.image)} key={o.id}></div>)
                    }

                </div>

            </div>
        );
    }
}

export default InstagramShopComponent