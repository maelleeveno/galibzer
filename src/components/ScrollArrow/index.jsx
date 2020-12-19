import React, {useState} from 'react';
import { Icon } from 'semantic-ui-react';
import './scrollArrow.scss';


const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150){
      setShowScroll(false);
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
        <Icon name="arrow up" className="scroll-arrow" onClick={scrollTop} style={{visibility: showScroll ? 'visible' : 'hidden'}}/>
  );
}

export default ScrollArrow;