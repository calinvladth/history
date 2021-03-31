import React, {Component} from 'react';
import style from './index.module.sass'
import {PostsPath} from "../../pages/posts/path";
import {Link, withRouter} from "react-router-dom";
import {LegalPath} from "../../pages/legal/path";
import {AdminPosts} from "../../pages/admin/posts/path";
import BackToTopComponent from "../back_to_top";
import BuyMeACoffee from "../buy_me_a_coffee";

class HeaderComponent extends Component {

    state = {
        showBackToTop: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {showBackToTop} = this.state
        if (window.pageYOffset > 1500 && !showBackToTop) {
            this.setState({
                showBackToTop: true
            })
        } else if (window.pageYOffset < 1500 && showBackToTop) {
            this.setState({
                showBackToTop: false
            })
        }

    }

    render() {
        const path = this.props.history.location.pathname
        const token = localStorage.getItem('adtk')
        return (
            <div className={style.box}>
                <div className={style.logo}>
                    <Link to={PostsPath}>
                        <h1><span>TG</span>W</h1>
                    </Link>
                </div>

                <div className={style.actions}>
                    <div>
                        {
                            path === PostsPath && this.state.showBackToTop && <BackToTopComponent/>
                        }
                    </div>
                    <div>
                        <BuyMeACoffee/>
                    </div>
                </div>

                <div className={style.legal}>
                    {
                        token
                            ?
                            <Link to={AdminPosts.path}>Admin</Link>
                            :
                            <Link to={LegalPath}>Legal</Link>
                    }

                </div>
            </div>
        );
    }
}

export default withRouter(HeaderComponent)