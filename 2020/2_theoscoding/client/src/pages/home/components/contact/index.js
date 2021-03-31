import React from 'react'
import './index.sass'
import WorkImg from '../../../../assets/images/button_img.jpg'
import Line_5 from '../../../../assets/icons/3.svg'
import Line_6 from '../../../../assets/icons/6.svg'
import ComponentSlot from "../../../../slots/component";
import axios from 'axios'
import Resume from './TheodorCalin.pdf'

const ButtonBackground = {
    backgroundImage: `url(${WorkImg})`
}

class Contact extends React.Component {
    initialState = {
        name: '',
        email: '',
        subject: ''
    }

    state = {}

    componentDidMount() {
        this.setState(this.initialState)
    }

    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value})
    }

    submit = () => {
        const url = 'http://localhost:7000/mail/'
        const {name, email, subject} = this.state

        axios.post(url, {name, email, subject})
            .then(() => {
                console.log('MAIL WAS SEND SUCCESSFULLY')
                this.setState(this.initialState)
            })
            .catch(() => console.log('THERE WAS AN ERROR WHILE SENDING THE EMAIL'))
    }

    download = () => {

    }


    render() {
        const {name, email, subject} = this.state
        return (
            <ComponentSlot background={'#070707'} id={'contact'}>
                {/*Position  Absolute, no limit*/}
                <img className="contactLine5" src={Line_5} alt=""/>
                <img className="contactLine6" src={Line_6} alt=""/>

                <div className="contact__content--color">
                    <div className="contact__content--number">
                        <span className="contactNumber">05</span>
                    </div>
                </div>

                {/*In container*/}
                <form className="contact" onSubmit={this.submit}>
                    <div className="contact__content">
                        <div className="contact__content--title">
                            <h3 className="contactTitle">Get in touch .</h3>
                        </div>
                        <div className="contact__content--form">
                            <input type="text" placeholder="Name" className="contactForm contactForm__input"
                                   value={name}
                                   onChange={this.handleChange('name')}/>
                            <input type="email" placeholder="Email" className="contactForm contactForm__input"
                                   value={email}
                                   onChange={this.handleChange('email')}/>
                            <textarea rows="3" placeholder="Message"
                                      className="contactForm contactForm__textarea"
                                      onChange={this.handleChange('subject')} value={subject}></textarea>
                        </div>
                        <div className="contact__content--buttons">
                            <div
                                className={name && email && subject ? 'contactButton' : `contactButton contactButton--inactive`}>
                                <span className="contactButton__name" onClick={() => this.submit()}>send message</span>
                            </div>
                            <a href={Resume} target="_blank" style={ButtonBackground} className="contactButton"
                               onClick={() => this.download()}>
                                <span className="contactButton__name">download cv</span>
                                <img className="contactButton__img" src={WorkImg} alt=""/>
                            </a>
                        </div>
                    </div>
                </form>

            </ComponentSlot>
        )
    }
}

export default Contact
