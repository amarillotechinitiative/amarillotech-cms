import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo/FullLogo_White.svg'
import facebook from '../img/social/FB_BlueWhite.svg'
import meetup from '../img/social/Meetup_Blue_1.svg'
import email from '../img/social/Email_LightGrey.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
	    <div className="columns">
	    	<div className="column is-4 social">
			<a title="facebook" href="https://facebook.com">
				  <img
				    src={facebook}
				    alt="Facebook"
				  />
			</a>
			<a title="meetup" href="https://meetup.com">
				  <img
				    className="fas fa-lg"
				    src={meetup}
				    alt="Amarillo Tech Meetup"
				  />
			</a>
			<a title="email" href="https://instagram.com">
				  <img
				    src={email}
				    alt="E-mail"
				  />
			</a>
              	</div>
	    	<div className="column is-4">
	    		
	    	</div>
	    	<div className="column is-4">
	    		<section className="menu">
	    			<ul className="menu-list">
	    				<li>
	    					<Link to="/" className="navbar-item">Home</Link>
	    				</li>
						<li>
							<Link className="navbar-item" to="/blog">Blog</Link>
						</li>
	    				<li>
			      			<Link className="navbar-item" to="/about">About Us</Link>
						</li>
						<li>
							<a
								className="navbar-item"
								href="/admin/"
								target="_blank"
								rel="noopener noreferrer" >Admin</a>
						</li>
						<li>
							<Link className="navbar-item" to="/contact">Contact</Link>
						</li>
					</ul>
				</section>
			  </div>
		<div className="column is-4">
		</div>
			</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
