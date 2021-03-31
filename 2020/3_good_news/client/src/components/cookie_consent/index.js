import React, {Component} from 'react';
import style from './index.module.sass'
import Button from "../button";
import PostSlot from "../../pages/posts/components/post_slot";

class CookieConsentComponent extends Component {

    componentDidMount() {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }

    componentWillUnmount() {
        document.getElementsByTagName('body')[0].style.overflow = 'initial'
    }

    render() {
        const {agreement} = this.props
        return (
            <div className={style.box}>
                <div className={style.content}>
                    <PostSlot>
                        <div className={style.slot}>
                            <div className={style.logo}>
                                <div>
                                    <h1>TGW</h1>
                                </div>
                            </div>
                            <div className={style.title}>
                                <h1>You must agree with our cookie policy before you continue:</h1>
                            </div>
                            <div className={style.text}>
                                <p>This website or its third-party tools process personal data (e.g. browsing data or IP
                                    addresses)
                                    and use cookies or other identifiers, which are necessary for its functioning and
                                    required
                                    to
                                    achieve the purposes illustrated in the cookie policy.
                                    You accept the use of cookies or other identifiers, by
                                    clicking the green button.</p>
                            </div>

                            <div className={style.action}>
                                <Button onClick={() => agreement(false)} backgroundColor='red' color='white'
                                        borderColor='white'>
                                    Deny
                                </Button>
                                <Button onClick={() => agreement(true)} backgroundColor='green' color='white'
                                        borderColor='white'>
                                    Agree
                                </Button>
                            </div>
                        </div>
                    </PostSlot>
                </div>
            </div>
        );
    }
}

export default CookieConsentComponent;