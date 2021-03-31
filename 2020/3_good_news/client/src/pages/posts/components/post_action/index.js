import React, {Component} from 'react';
import style from './index.module.sass'
import Button from "../../../../components/button";
import {blue, orange, white} from "../../../../assets/style/colors";

class PostActionComponent extends Component {

    render() {
        const {official, discussion} = this.props
        return (
            <div className={style.box}>
                <div className={style.button}>
                    {
                        official && <a href={official} target="_blank" rel="noopener noreferrer" >
                            <Button color={white} backgroundColor={blue}>
                                <span>Official Source</span>
                            </Button>
                        </a>
                    }
                </div>
                <div className={style.button}>
                    {
                        discussion && <a href={discussion} target="_blank" rel="noopener noreferrer" >
                            <Button color={white} backgroundColor={orange}>
                                <span>Public Discussion</span>
                            </Button>
                        </a>
                    }
                </div>
            </div>
        );
    }
}

export default PostActionComponent;