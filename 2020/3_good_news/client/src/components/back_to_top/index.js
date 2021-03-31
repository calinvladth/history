import React, {Component} from 'react';
import style from './index.module.sass'
import Button from "../button";

class BackToTopComponent extends Component {

    toTop = () => {
        document.getElementById('top').scrollIntoView()
    }

    render() {
        return (
            <div className={style.box}>
                <Button onClick={() => this.toTop()}>
                    <span>Back to</span> <span>top</span>
                </Button>
            </div>
        );
    }
}

export default BackToTopComponent;