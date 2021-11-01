import logo from './assets/igori-gaming-logo.png';
import './sass/main.scss';
import actam from "./assets/act_am.png"
import { useState, useEffect } from 'react';
import { actGame } from './games';

function App() {

  const hoursMinSecs = { hours: 0, minutes: 1, seconds: 0 }

  const { hours = 0, minutes = 0, seconds = 60, } = hoursMinSecs;



  const [num, setNum] = useState(null)
  const [isTimer, setIsTimer] = useState(false)
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);


  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


  const tick = () => {

    if (hrs === 0 && mins === 0 && secs === 0)
      reset()
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };


  useEffect(() => {

    if (isTimer === true) {
      const timerId = setInterval(() => tick(), 1000);

      return () => {
        clearInterval(timerId)

        if (secs === 1) {
          setIsTimer(false)
          setNum(null)
        }
      }
    }

  })



  const returnRandom = () => {

    const length = actGame.length
    const num = Math.floor(Math.random() * length) + 1

    setNum(num)
    reset()
    setIsTimer(true)

  }


  return (
    <div className="App">

      {/* <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Igori Gaming - Act Am</h1> */}
      <div className="wrapper">


        <div className="overviewInfo">
          <div className="actions">
            <div className="backbutton ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cartbutton neurobutton">

              <img src={logo} style={{ width: "24px", height: "24px" }} alt="logo" />
            </div>
          </div>

          <div className="productinfo">


            <div className="productImage">
              <img src={actam} alt="product: ps5 controller" />
            </div>

          </div>

        </div>

        <div className="productSpecifications">

          {num === null ?
            <>
              <h1 style={{ marginTop: "50px" }}>
                Ready?
              </h1>

              {/* <p> You have one minute to act the word.</p> */}
              <p> How well can you act and how well can you guess? Here’s a game to test your capabilities in both!</p>


            </>
            :
            <>
              <h1 style={{ marginTop: "50px" }}>  {
                actGame[num - 1]?.title
              }</h1>

              {/* <p> How well can you act and how well can you guess? Here’s a game to test your capabilities in both!</p> */}
              <p> You have one minute to act any ONE of the following.</p>

              <div className="productFeatures">
                <div className="feature">
                  <div className="featureIcon">
                  </div>
                  <div className="featureText">
                    <p> <strong>                {actGame[num - 1]?.item_1}
                    </strong></p>
                    {/* <p>Design</p> */}
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon">
                  </div>
                  <div className="featureText">
                    <p> <strong>
                      {actGame[num - 1]?.item_2}
                    </strong></p>
                    {/* <p>Microphone</p> */}
                  </div>
                </div>
                <div className="feature">
                  <div className="featureIcon">
                  </div>
                  <div className="featureText">
                    <p> <strong>
                      {actGame[num - 1]?.item_3}
                    </strong></p>
                    {/* <p>Feedback</p> */}
                  </div>
                </div>
              </div>
            </>
          }


          <div className="checkoutButton">
            <div className="priceTag">
              {`${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
            </div>
            <button className="preorder" onClick={returnRandom}>
              <p>New Word</p>
              <div className="buttonaction">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
          <iframe title="spotify" src="https://open.spotify.com/embed/playlist/37i9dQZF1E39ZaSepTiwPt?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ borderRadius: "12px", marginTop: "20px" }}></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
