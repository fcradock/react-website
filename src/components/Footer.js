import React from 'react'
import { Button } from './Button'
import'./Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                
            Join the ReadingCircle newsletter to stay up to date on what your friends are reading!
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
                     <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Company</h2>
            <Link to='/sign-up'>About Us</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Help</Link>
            <Link to='/'>Terms of Service</Link>
            </div>

            <div className="footer-link-items">
                <h2>Join the Circle!</h2>
                <Link to='/sign-up'>Sign Up Here</Link>
            <Link to='/'>Share with friends!</Link>
           
            </div>
            </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Discover</h2>
            <Link to='/'>Book Lists</Link>
            <Link to='/'>Collections</Link>
            <Link to='/'>Talk</Link>
            <Link to='/'>Events</Link>
            </div>
        
            <div className="footer-link-items">
                <h2>Languages</h2>
            <Link to='/'>English</Link>
            
            </div>
      </div>
    </div>
    <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/'className="social-logo">
                    ReadingCircle <i className="fab typo3"></i>
                </Link>
            </div>
            <small className="website-rights">ReadingCircle © 2024</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>  
            </div>
        </div>
    </section>

</div>
  )
}

export default Footer
