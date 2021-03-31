import React from 'react'
import Portfolio from "./components/portofolio";
import Services from "./components/services";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import '../../assets/style/index.sass'
import './index.sass'
import Track from "./components/small_components/track";
import {withRouter} from "react-router-dom";
import {HomePath} from "./path";

const components = ['home', 'about', 'services', 'portfolio', 'contact']

class HomePage extends React.Component {

    state = {
        active: ''
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true)
    }

    handleScroll = (event) => {
        if (this.props.history.location.pathname === HomePath) {

            let active = ''
            let offset = window.pageYOffset
            for (let i = 0; i < components.length; i++) {
                let componentTop = document.getElementById(components[i]).offsetTop
                let componentHeight = document.getElementById(components[i]).offsetHeight
                let componentBottom = componentTop + componentHeight
                if (componentTop - offset < componentHeight / 2) {
                    active = components[i]
                } else if (componentBottom - offset < componentHeight / 2) {
                    active = components[i]
                }
            }
            if (this.state.active !== active) {
                this.setState({active: active})
            }
        }
    }

    render() {
        return (
            <div>
                <Track handleClick={handleClick} components={components} active={this.state.active}/>
                <Home handleClick={handleClick} components={components} active={this.state.active}/>
                <About handleClick={handleClick} active={this.state.active}/>
                <Services handleClick={handleClick} active={this.state.active}/>
                <Portfolio active={this.state.active} handleClick={handleClick}/>
                <Contact active={this.state.active}/>
            </div>
        )
    }

}


const handleClick = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}

export default withRouter(HomePage)
