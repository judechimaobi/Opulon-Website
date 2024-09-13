import React from "react";
import "./FrameComponent1.css";

export const FrameComponent1 = ({ className = "" }) => {

  const handleIconClick = (url) => () => {
    if (url) {
      window.open(url, '_blank');
    }
  };


  return (
    <section className={`immersive-world-container-parent ${className}`}>
      <div className="immersive-world-container">
        <h2 className="an-immersive-virtual">
          an Immersive Virtual World Built on Solana
        </h2>
        <div className="solana-world-description">
          <div className="opulon-is-a">
            Opulon is a virtual crypto world built on the Solana blockchain,
            designed to bring blockchain activities like trading, gaming, and
            social interaction into a unified and immersive environment.
          </div>
          <div className="social-icons">
            <img
              className="ritwitter-x-fill-icon"
              loading="lazy"
              alt="Twitter"
              src="./images/twitter-icon.png"
              onClick={handleIconClick('https://twitter.com/opulon_official')}
            />
            {/* <img
              className="riinstagram-line-icon"
              loading="lazy"
              alt="Instagram"
              src="./images/instagram-icon.png"
              onClick={handleIconClick('https://instagram.com/yourprofile')}
            />
            <img
              className="mingcuteyoutube-fill-icon"
              loading="lazy"
              alt="YouTube"
              src="./images/youtube-icon.png"
              onClick={handleIconClick('https://youtube.com/yourchannel')}
            /> */}
            <img
              className="icbaseline-discord-icon"
              loading="lazy"
              alt="Discord"
              src="./images/discord-icon.png"
              onClick={handleIconClick('https://discord.com/invite/opulon_official')}
            />
          </div>
        </div>
      </div>
      <div className="trade-play-and-connect-in-a-wrapper">
        <div className="trade-play-and">
          Trade, Play, and Connect in a Seamless Crypto Ecosystem
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
