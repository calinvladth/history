import React, {Component} from 'react';
import style from './index.module.sass'
import PostSlot from "../post_slot";
import {orange} from "../../../../assets/style/colors";
import {my_coffee} from "../../../../config";

class HeroComponent extends Component {
    render() {
        return (
            <PostSlot>
                <div className={style.box}>
                    <div className={style.title} style={{borderColor: orange}}>
                        <h1>The good world</h1>
                    </div>

                    <div className={style.description}>
                        <p>Good news from around the internet!</p>
                        <p>If you are looking for something to brighten up your day, you are in the right place.</p>
                        <br/>
                        <p>You can read the titles, go to the news source, and participate in a public debate about each subject.</p>
                        <p>I believe you deserve to be well informed.</p>
                    </div>
                </div>
            </PostSlot>
        );
    }
}

export default HeroComponent;