import React from 'react';

function Footer(){

    const currentYear = new Date().getFullYear();
  
    return(
      <div className="Footer">
      <hr></hr>
          <h6>Show us some ❤️ on social media</h6><br></br>
          <ul className="social">
            <li><i class="fa-brands fa-facebook icon"></i></li>
            <li><i class="fa-brands fa-instagram icon"></i></li>
            <li><i class="fa-brands fa-twitter icon"></i></li>
            <li><i class="fa-brands fa-youtube icon"></i></li>
            <li><i class="fa-brands fa-pinterest icon"></i></li>
            <li><i class="fa-solid fa-envelope icon"></i></li>
          </ul>
          <br></br>
          <p>Copyright ⓒ {currentYear}</p>
      </div>
    )
  }
  
export default Footer;  