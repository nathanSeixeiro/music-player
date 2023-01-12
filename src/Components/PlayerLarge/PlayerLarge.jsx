import "./PlayerLarge.css";

const playBack = require("../../assets/play-back.png");
const play = require("../../assets/play.png");
const playForward = require("../../assets/play-forward.png");
const img = require("../../assets/teste.png");

const PlayerLarge = () => {
  return (
    <>
      <div className="player-container">
        <img className="imgPlayer" src={img} alt="capa da música" />
        <div className="names-content">
          <div className="name-music">
            <h2>Privilege</h2>
          </div>
          <div className="name-band">
            <p>The Weekend</p>
          </div>
        </div>
        <br />
        <br />
        <div className="players-content">
          <img className="play-back" src={playBack} alt="" />
          <img className="play" src={play} alt="" />
          <img className="play-forward" src={playForward} alt="" />
        </div>
        <div className="progress-container">
          <div className="progress"></div>
          <div className="time">
            <p className="start"> 00:00</p>
            <p className="end"> 03:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerLarge;
