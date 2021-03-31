import React, {Component} from 'react';
import style from './index.module.sass'

class PostSlot extends Component {
    render() {
        const {children} = this.props
        return (
            <div className={style.box}>
                {children}
            </div>
        );
    }
}

export default PostSlot;