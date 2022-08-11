import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
            <h3>SAIL</h3>
            <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
