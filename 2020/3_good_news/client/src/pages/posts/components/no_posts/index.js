import React, {Component} from 'react'
import style from './index.module.sass'
import PostSlot from "../post_slot"

class NoPostsComponent extends Component {
    render() {
        return (
            <PostSlot>
                <div className={style.message}>
                    <p>No posts found matching your criteria</p>
                </div>
            </PostSlot>
        );
    }
}

export default NoPostsComponent;