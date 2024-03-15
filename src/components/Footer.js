import React from 'react'
import {LiaTelegramPlane} from 'react-icons/lia'
import {Link} from 'react-router-dom'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-15 align-items-center">
            <LiaTelegramPlane className='text-white fs-2 me-0'/>
            <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
                <input 
                  type="text" 
                  className="form-control p-3" 
                  placeholder="Your Email Address" 
                  aria-label="Your Email Address" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subcribe
                </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row d-flex ">
          <div className="col-4">
            <h4 className='text-white mb-3'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'> 43 Consett Rd, <br/>
              Highfield City, United Kingdom <br/>
              Zip code:  NE39 8BY <br/>
              </address>
              <a className='mt-4 d-block text-white mb-2' href="tel: 079 8865 2777">+8579 8865 2777</a>
              <a className='mt-4 d-block text-white mb-2' href="mailto:name-nutrition@example.com">name-nutrition@example.com</a>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <a href=""><BsFacebook className='fs-4 text-white'/></a>
                <a href=""><BsInstagram className='fs-4 text-white'/></a>
                <a href=""><FaXTwitter className='fs-4 text-white'/></a>
                <a href=""><BsYoutube className='fs-4 text-white'/></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-2'>Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-2'>Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-2'>Shipping Policy</Link>
              <Link to='/terms-conditions' className='text-white py-2 mb-2'>Terms & Conditions</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-2'>About us</Link>
              <Link className='text-white py-2 mb-2'>Faq</Link>
              <Link className='text-white py-2 mb-2'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-2'>Fruit & Vegetables</Link>
              <Link className='text-white py-2 mb-2'>Meat & Fish</Link>
              <Link className='text-white py-2 mb-2'>Treats & Snacks</Link>
              <Link className='text-white py-2 mb-2'>Drinks</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-0 text-white ">&copy; {new Date().getFullYear()}; Food E-commerce Website Project</div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer