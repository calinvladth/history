import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from "./pages/routes";
import {Provider} from "react-redux";
import store from "./store";
import 'tachyons/css/tachyons.min.css'
import './assets/style/index.sass'
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';
import CookieConsentComponent from "./components/cookie_consent";
import moment from "moment";
import Cookies from "universal-cookie/cjs";

ReactGA.initialize('UA-162886252-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const cookies = new Cookies();

class App extends Component {

    state = {
        cp_agreement: false
    }

    cp_agreement = (agreement) => {
        if (agreement) {
            const date = new Date(moment().add(1, 'year').format())
            cookies.set('cp_agreement', agreement, {expires: date})
            this.setState({'cp_agreement': agreement})
        } else {
            window.history.back()
        }
    }

    componentDidMount() {
        this.setState({cp_agreement: cookies.get('cp_agreement')})
    }

    render() {
        const {cp_agreement} = this.state

        return (
            <Provider store={store}>
                <Helmet>
                    <title>TGW</title>
                    <meta name="description" content="The good world"/>
                </Helmet>
                {!cp_agreement && <CookieConsentComponent agreement={this.cp_agreement}/>}

                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
