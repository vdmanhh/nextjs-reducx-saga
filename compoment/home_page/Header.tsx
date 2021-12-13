import React from 'react'

const Header = () => {
    return (
        <>
            <div>
  <div className="header">
    <div className="top">
      <div className="title">
        <p>Let the world know about your cool NFT store!</p>
      </div>
      <div className="social">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02--T2mcE4v5kHmymDMpVLdovMAKoUVw49w&usqp=CAU" alt="" />
        <img src="./img/twiter.png" alt="" />
        <img src="./img/tele.png" alt="" />
      </div>
    </div>
  </div>
  <div className="nav">
    <div className="left">
      <img className="logo" src="./img/logo.PNG" alt="" />
      <img className="name" src="./img/name.png" alt="" />
      <form action=''>
        <input type="text" placeholder="enter your email" />
        <i className="fas fa-search" />
      </form>
    </div>
    <div className="right">
      <div className="contain">
        <nav>
          <a href=''>Home</a>
          <a href=''>Discover</a>
          <a href=''>Mystery Box</a>
          <a href=''>Activity</a>
          <a href=''>Connect Wallet</a>
          <img src="./img/btn1.PNG" alt="" />
          <img src="./img/btn2.PNG" alt="" />
        </nav>
      </div>
      <div className="menu"> <img src="./img/menu.PNG" alt="" /></div>
    </div>
  </div>
</div>

        </>
    )
}

export default Header
