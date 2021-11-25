import React from   'react';
import './nav.css'

const gmailPng = require('../img/gmail.png').default
const phone = require('../img/phone-call.png').default
const gitHub = require('../img/github.png').default
const linkedIn = require('../img/linkedin.png').default

const nav = () => {
    return <>
    <div className="sticky">
        <ul>
            <li><a href="tel:07771065255"><img src={phone} alt="Phone"/></a></li>
            <li><a href="mailto:emil88pl@gmail.com"><img src={gmailPng} alt="gmail"/></a></li>
            <li><a href="https://github.com/Emil88PL" target="_blank" rel="noreferrer"><img src={gitHub} alt="GitHub Icon"/></a></li>
            <li><a href="https://www.linkedin.com/in/emil-kotlowski" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn Icon"/></a></li>
        </ul>
    </div>
    </>
}






export default nav

