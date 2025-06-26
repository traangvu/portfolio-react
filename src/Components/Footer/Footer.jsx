import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className="footer-logo" src={footer_logo} alt="" />
                    <p>I’m a senior student at Software Engineering student at Metropolia University Of Applied Sciences in Finland. 
                    </p>
                </div>
                <div className="footer-top-right">
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2025 Trang Vu. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
