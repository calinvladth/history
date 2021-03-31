import React, {Component} from 'react';
import style from './index.module.sass'
import PostSlot from "../post_slot";

class PostLoadingComponent extends Component {
    render() {
        return (
            <PostSlot>
                <div className={style.box}>
                    <div className={style.thumbnail}>
                        <div className={style.thumbnailImage}></div>
                    </div>
                    <div className={style.content}>
                        <div className={style.title}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={style.action}>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={style.meta}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </PostSlot>
        );
    }
}

export default PostLoadingComponent