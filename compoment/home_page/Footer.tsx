import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="rows">
          <div className="item">
            <div className="icoin">
              <img className="logo" src="/img/logo.PNG" alt="" />
              <img className="name" src="/img/name.png" alt="" />
            </div>
            <p className="name">Fuel the rise of the Digital Content World</p>
          </div>
          <div className="item">
            <a href="#">ABOUT</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">FAQs</a>
          </div>
          <div className="item">
            <a href="#">Contact Us</a>
            <p>
              <i className="fas fa-envelope" /> john.lee@gmail.com
            </p>
            <p>
              <i className="fas fa-phone" />
              (+84) 969 456 133
            </p>
          </div>
          <div className="item">
            <a href="#">SOCIAL MEDIA</a>
            <div className="icoins_social">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02--T2mcE4v5kHmymDMpVLdovMAKoUVw49w&usqp=CAU"
                alt=""
              />
              <img src="./img/twiter.png" alt="" />
              <img src="./img/tele.png" alt="" />
              <img src="/img/insta.PNG" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
