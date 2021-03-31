import React, {Component} from 'react';
import style from './index.module.sass'
import axios from 'axios'
import {AdminLogin} from "../login/path";
import {withRouter} from "react-router-dom";
import Button from "../../../components/button";
import PostSlot from "../../posts/components/post_slot";
import {api} from "../../../config";
import LogsTableComponent from "./table";
import {orange, white} from "../../../assets/style/colors";
import {Helmet} from "react-helmet";

class AdminPostsPage extends Component {

    state = {
        logs: [],
        logsLoaded: false,
        errorLogs: false,
        messageLogs: '',
        databaseUpdated: false,
        populateLoading: false,
        populateLoaded: false,
        buttonMessage: 'Populate With news',
        days: 3,
    }

    componentDidMount() {
        const token = localStorage.getItem('adtk')
        if (!token) {
            this.props.history.push(AdminLogin.path)
        } else {
            this.getLogs()
        }
    }

    componentWillUnmount() {
        this.setState({
            logs: [],
            logsLoaded: false,
            errorLogs: false,
            messageLogs: '',
            databaseUpdated: false,
            populateLoading: false,
            populateLoaded: false,
            buttonMessage: 'Populate With news',
            days: 3,
        })
    }

    getLogs = () => {
        axios({
            method: 'GET',
            url: `${api}/posts/logs/`,
            headers: {
                'Authorization': `Token ${localStorage.getItem('adtk')}`
            }
        })
            .then(response => {
                this.setState({
                    logs: response.data.data,
                })
            })
            .catch(error => {
                this.setState({
                    errorLogs: true,
                    messageLogs: 'Internal server error'
                })
            })
    }

    bulkCreatePosts = () => {
        axios({
            method: 'POST',
            url: `${api}/posts/reddit/`,
            data: {days: this.state.days},
            headers: {
                'Authorization': `Token ${localStorage.getItem('adtk')}`
            }
        })
            .then(response => {
                this.setState({
                    populateLoaded: true,
                    populateLoading: false,
                    buttonMessage: response.data.message
                })
                this.getLogs()
            })
            .catch(error => {
                this.setState({
                    populateLoading: false,
                    buttonMessage: 'Something went wrong ...'
                })
            })
    }

    submit = () => {
        this.setState({
            populateLoading: true
        })

        this.bulkCreatePosts()
    }

    changeDays = (add = true) => {
        const {days} = this.state

        let newDays = days + 1

        if (!add) {
            newDays = days - 1
        }
        if (newDays < 1) {
            newDays = 1
        }
        if (newDays > 10) {
            newDays = 10
        }

        this.setState({
            days: newDays
        })
    }


    render() {
        const {errorLogs, messageLogs, buttonMessage, populateLoading, populateLoaded} = this.state
        return (
            <div className={style.box}>
                <Helmet>
                    <title>TGW | Admin Posts</title>
                    <meta name="description" content="The good world / Admin Posts"/>
                </Helmet>

                <div className={style.content}>
                    <PostSlot>
                        <Button color={white} backgroundColor={orange} onClick={this.submit} disabled={populateLoaded}>{
                            populateLoading ?
                                'Loading ...'
                                :
                                buttonMessage
                        }</Button>
                        <div className={style.contentOptions}>
                            <div className={style.day}>
                                <div className={style.dayNumber}>
                                    <p>Days: <span style={{color: orange}}>{this.state.days}</span></p>
                                </div>
                                <div className={style.dayOptions}>
                                    <div onClick={() => this.changeDays(true)}><p>+</p></div>
                                    <div onClick={() => this.changeDays(false)}><p>-</p></div>
                                </div>
                            </div>
                        </div>
                    </PostSlot>
                </div>

                <div className={style.table}>
                    <PostSlot>
                        <div className={style.tableTitle}>
                            <h1>Content Activity</h1>
                        </div>
                        {
                            errorLogs && <div className={style.tableBanner}>
                                <p>{messageLogs}</p>
                            </div>
                        }

                        <div className={style.tableContent}>
                            <LogsTableComponent logs={this.state.logs}/>
                        </div>
                    </PostSlot>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminPostsPage)