import React, {Component} from 'react';
import style from './index.module.sass'
import Button from "../../../components/button";
import PostSlot from "../../posts/components/post_slot";
import {orange} from "../../../assets/style/colors";
import axios from 'axios'
import {api} from "../../../config";
import {AdminPosts} from "../posts/path";
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

class AdminLoginPage extends Component {

    state = {
        email: '',
        password: '',
        error: false,
        message: ''
    }

    componentDidMount() {
        const token = localStorage.getItem('adtk')
        if (token) {
            this.props.history.push(AdminPosts.path)
        }
    }

    handleChange = (input) => (e) => {
        this.setState({
            [input]: e.target.value
        })
    }

    login = () => {
        const {email, password} = this.state
        if (email && password) {
            axios({
                method: 'POST',
                url: `${api}/account/login/`,
                data: {email, password}
            })
                .then(response => {
                    localStorage.setItem('adtk', response.data.token)
                    this.props.history.push(AdminPosts.path)
                })
                .catch(error => {
                    this.setState({
                        error: true,
                        message: error.response.data.message
                    })
                })
        }

    }

    render() {
        const {email, password, error, message} = this.state
        return (
            <div className={style.box}>
                <Helmet>
                    <title>TGW | Admin</title>
                    <meta name="description" content="The good world / Admin"/>
                </Helmet>
                <div className={style.content}>
                    <PostSlot>

                        <div className={style.contentTitle}>
                            <h1>Login</h1>
                        </div>

                        {
                            error && <div className={style.banner}>
                                <p>{message}</p>
                            </div>

                        }


                        <div className={style.form}>
                            <div className={style.formInput}>
                                <input type="email" value={email} onChange={this.handleChange('email')}/>
                            </div>
                            <div className={style.formInput}>
                                <input type="password" value={password} onChange={this.handleChange('password')}/>
                            </div>
                            <div className={style.formSubmit}>
                                <Button color={orange} borderColor={orange} onClick={this.login}>submit</Button>
                            </div>
                        </div>
                    </PostSlot>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminLoginPage)