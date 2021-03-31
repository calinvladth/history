import React from "react";
import './index.sass'
import {Button} from "react-bootstrap";


const Footer = () => {
    return (
        <div className="footerBox">
            <div className="footerBox__content">
                <h3 className="footerBox__title">About the project</h3>
                <p>This project is a Money tracker</p>
                <p>By now I developed a basic structure to show the money activity with different type of reports</p>
                <br/>
                <p>My purpose is to develop a way of improving the finance quality based on reports,
                    and to raise awareness of bad habits in spending or not healthy type of revenues</p>
                <br/>
                <br/>
                <p>Until then, you can test the initial version by creating and account</p>
                <br/>
                <br/>
                <p>If you experience any bugs, contact me in private with ' BUG ' in the subject</p>
                <p>If you have any good practices that helps you with your finances, I would like to hear</p>
                <br/>
                <br/>
                <Button variant="danger" className="buttonContact" href="mailto:calinvladth@icloud.com">Contact: calinvladth@icloud.com</Button>
                <br/>
                <br/>
                <p>The email addresses will not be processed for marketing purposes</p>
            </div>
        </div>
    )
}

export default Footer
