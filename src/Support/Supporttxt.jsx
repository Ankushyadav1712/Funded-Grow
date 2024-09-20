import React from 'react'
import './Supporttxt.css'
import { Link } from 'react-router-dom'
const Supporttxt = () => {
  return (
    <div>
        <div className="support-page">
      <h1>Support</h1>

      {/* Search Bar */}
      {/* <div className="search-section">
        <input type="text" placeholder="Search for help..." className='bg-white border border-black ' />
      </div> */}

      {/* FAQ Section */}
      <div className="faq-section mt-5 mb-4 p-3 pb-4">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item pt-2">
          <h3>How do I create a trading account?</h3>
          <p>You can create an account by clicking on the <Link className='no-underline' to='/register'>Register</Link> button and following the registration process.</p>
        </div>
        <div className="faq-item">
          <h3>How do I deposit funds?</h3>
          <p>To deposit funds, go to your account dashboard, click on "Deposit," and follow the instructions.</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>

      {/* Contact Section */}
      <div className="contact-section mt-5 text-center">
        <h2>Contact Us</h2>
        <p>If you can't find what you're looking for, feel free to contact us:</p>
        <ul>
          <li>Email: support@fundedgrow.com</li>
          <li>Phone: +91-234-567-8901</li>

        </ul>
      </div>

      {/* Knowledge Base Section */}
      {/* <div className="knowledge-base">
        <h2>Knowledge Base</h2>
        <p>Explore our detailed guides:</p>
        <ul>
          <li><a href="/guide/getting-started">Getting Started with Trading</a></li>
          <li><a href="/guide/depositing-funds">How to Deposit Funds</a></li>
          <li><a href="/guide/understanding-markets">Understanding the Markets</a></li>

        </ul>
      </div> */}

      {/* Optionally: Add a live chat widget or integration */}
    </div>
    </div>
  )
}

export default Supporttxt