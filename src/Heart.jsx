import "./index.css";  
import heart from './assets/gradient-heart.png'

export const FloatingHearts = () => {
    return (
      <>
        <img src={heart} className="heart" style={{ top: "10%", left: "20%" }} />
        <img src={heart} className="heart" style={{ top: "30%", left: "50%" }} />
        <img src={heart} className="heart" style={{ top: "60%", left: "80%" }} />
      </>
    );
  };
  