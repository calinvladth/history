import React, {useState} from "react";
import style from './index.module.sass'
import {useHistory} from "react-router";
import {MessageSuccessPath} from "../../../message_success/path";


const FormComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    function submit(e) {
        e.preventDefault()
        const data = {
            name, email, subject, message
        }
        console.log('Submit message: ', data)
        history.push(MessageSuccessPath)
    }

    return (
        <form className={style.form} onSubmit={(e) => submit(e)}>
            <div className={style.formGroup}>
                <input
                    type="text"
                    placeholder="Your name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                <input
                    type="email"
                    placeholder="Your email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
            </div>
            <div className={style.formInput}>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required/>
            </div>
            <div className={style.formTextarea}>
                <textarea
                    placeholder="Message here ..."
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required/>
            </div>
            <div className={style.formSubmit}>
                <button type="submit" className="button button--full">Submit</button>
            </div>
        </form>
    );
}

export default FormComponent