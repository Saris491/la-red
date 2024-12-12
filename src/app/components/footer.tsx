import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-container__social">
      {/* <a href="https://www.instagram.com/kevin.atsma/" className="icon-btn"
        aria-label="Link to Instagram profile" target="_blank" rel="noopener"> */}
        {/* <i className="fab fa-instagram"></i> */}
      {/* </a> */}
        <a href="https://www.linkedin.com/in/kevin-atsma-6685039a/"target="_blank" rel="noopener"
            className="icon-btn" aria-label="Link to LinkedIn profile">
        {/* <i className="fab fa-facebook-square"></i> */}
      </a>
      </div>
      <div className="footer-container__address">
          <a target="_blank" rel="noopener" className="contact-link"
            href="https://maps.google.com/?q='Kerssemakersstraat 2, Sint Anthonis'">
            Address<br />
            Postal code
          </a>
      </div>
      <div className="footer-container__contact">
          <a className="contact-link" target="_blank" rel="noopener" href="mailto:">
            Email
          </a>
          <a className="contact-link" href="tel:06-21210182">
            Phone number
          </a>
      </div>
    </footer>
  )
}
