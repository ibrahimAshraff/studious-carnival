import logo from '../../../assets/igori-gaming-logo.png';
import actam from "../../../assets/act_am.png"
import { useState, useEffect } from 'react';
import { actGame } from '../../../games';
import { Link } from 'react-router-dom';

import { ImCheckboxUnchecked } from 'react-icons/im';
import { ImCheckboxChecked } from 'react-icons/im';
import { beep } from '../../../utils/sound';


function PracticeAct() {

    const hoursMinSecs = { hours: 0, minutes: 1, seconds: 0 }

    const { hours = 0, minutes = 0, seconds = 0, } = hoursMinSecs;



    const [num, setNum] = useState(null)
    const [isTimer, setIsTimer] = useState(false)
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [colour, setColour] = useState(true)

    const [score, setScore] = useState(0)


    const [checked_one, setChecked_one] = useState(false)
    const [checked_two, setChecked_two] = useState(false)
    const [checked_three, setChecked_three] = useState(false)



    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    const unScore_one = () => {
        setChecked_one(true)
        setScore(score + 1)
    }

    const Score_one = () => {
        setChecked_one(false)
        setScore(score - 1)
    }

    const unScore_two = () => {
        setChecked_two(true)
        setScore(score + 1)
    }

    const Score_two = () => {
        setChecked_two(false)
        setScore(score - 1)
    }
    const unScore_three = () => {
        setChecked_three(true)
        setScore(score + 1)
    }

    const Score_three = () => {
        setChecked_three(false)
        setScore(score - 1)
    }



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
        if (secs <= 10 && secs !== 0) {
            setColour(false)
            beep()
        }

        else {
            setColour(true)
        }
    }, [secs])


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
        setChecked_one(false)
        setChecked_two(false)
        setChecked_three(false)

        const length = actGame.length
        const num = Math.floor(Math.random() * length) + 1

        setNum(num)
        reset()
        setIsTimer(true)

    }


    return (
        <div className="App">
            <h1 style={{ margin: "20px auto", textAlign: "center" }}>Practice </h1>

            <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "1em" }}>
                Score: {score}
            </p>

            <div className="wrapper" style={{ margin: "0 auto" }}>
                <div className="overviewInfo">
                    <div className="actions">
                        <div className="backbutton ">

                            <Link to="pre">
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
                            </Link>
                        </div>

                        <div className="cartbutton neurobutton">

                            <img src={logo} style={{ width: "24px", height: "24px" }} alt="logo" />
                        </div>
                    </div>

                    <div className="productinfo" style={{ marginTop: "0px" }}>


                        <div className="productImage">
                            <img src={actam} alt="act_am_logo" />
                        </div>

                    </div>

                </div>

                <div className="productSpecifications">

                    {num === null ?
                        <>
                            <h1 style={{ marginTop: "50px" }}>
                                Ready?
                            </h1>

                            <p> How well can you act and how well can you guess? Here’s a game to test your capabilities in both!</p>


                        </>
                        :
                        <>
                            <h1 style={{ marginTop: "50px" }}>  {
                                actGame[num - 1]?.title
                            }</h1>

                            <p> You have one minute to act any ONE of the following.</p>

                            <div className="productFeatures">
                                <div className="feature">

                                    {checked_one ? <ImCheckboxChecked onClick={() => Score_one()} style={{ marginRight: "1em" }} /> : <ImCheckboxUnchecked onClick={() => unScore_one()} style={{ marginRight: "1em" }} />
                                    }
                                    <div className="featureText">
                                        <p> <strong>{actGame[num - 1]?.item_1}</strong></p>
                                    </div>
                                </div>
                                <div className="feature">
                                    {checked_two ? <ImCheckboxChecked onClick={() => Score_two()} style={{ marginRight: "1em" }} /> : <ImCheckboxUnchecked onClick={() => unScore_two()} style={{ marginRight: "1em" }} />
                                    }
                                    <div className="featureText">
                                        <p> <strong>
                                            {actGame[num - 1]?.item_2}
                                        </strong></p>
                                        {/* <p>Microphone</p> */}
                                    </div>
                                </div>
                                <div className="feature">
                                    {checked_three ? <ImCheckboxChecked onClick={() => Score_three()} style={{ marginRight: "1em" }} /> : <ImCheckboxUnchecked onClick={() => unScore_three()} style={{ marginRight: "1em" }} />
                                    }
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

                            {colour ? <div>

                                {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}

                            </div> :
                                <div style={{ color: "#FFA500" }}>
                                    {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}

                                </div>}
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

export default PracticeAct;
