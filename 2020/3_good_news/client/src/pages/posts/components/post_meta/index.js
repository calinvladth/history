import React, {Component} from 'react';
import style from './index.module.sass'

const moment = require('moment')
const moment_tz = require('moment-timezone')

class PostMetaComponent extends Component {

    formatTime = (time) => {
        const timezone = moment_tz.tz.guess()
        const date = moment.unix(time)
        const fromDate = moment_tz(date).tz(timezone).fromNow()
        return fromDate
    }

    render() {
        const {created_utc} = this.props

        return (
            <div className={style.box}>
                <div className={style.meta}>
                    {/*<p>Upvotes: <span>{score}</span></p>*/}
                </div>
                <div className={style.meta}>
                    <p>Posted: <span>{this.formatTime(created_utc)}</span></p>
                </div>
            </div>
        );
    }
}

export default PostMetaComponent;