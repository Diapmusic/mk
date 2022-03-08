import React, {useState, useEffect, useRef} from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/spec.jpg';
import './header.css';
import { init } from 'ityped';


function Header (){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      showCursor: false,
      backDelay:1500,
      strings: [ "Lynch is a play-to-earn game", " play-to-win business model" , "it  enables active players to earn rewards" ,"  win and sell their rewards to other active players", " players will have full ownership of their in-game items", "In-game item can trade for real money " ]
    }); 
  },[]);
 
  const [show, setShow] = useState(false)
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">We will build an RPG Game for gamers and NFT addicts to play, earn and trade in a decentralized economy</h1>
        <p><span ref={textRef} className="itypled-cursor"></span></p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__input">
          <button type="button" className='dw'>Download whitepaper</button>
        </div>
        

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/*<div className="gpt3__header-image">
        <img src={ai} />
      </div>*/}
    </div>
  );
}

export default Header;
