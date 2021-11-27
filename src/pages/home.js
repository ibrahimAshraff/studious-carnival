import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/act_am.png';
import hum from '../assets/hum-it.png'

const Home = () => {
    return (
        <>
            <div className="main-container">
                <div className="heading" style={{ marginTop: "50px" }}>
                    <h1 className="heading__title">Choose a Game</h1>
                    <p className="heading__credits"></p>
                </div>
                <div className="cards">
                    <div className="card card-3 card_flex" >
                        <div className="card__icn" >

                            <img src={logo} alt="" style={{ width: "150px", height: "150px" }} />
                        </div>
                        <div>
                            <h2 >Act Am</h2>
                            <h4 style={{ marginTop: "1em", fontWeight: "normal" }}>How well can you act and how well can you guess? Here’s a game to test your capabilities in both!</h4>

                            <p className="card__apply" style={{ marginTop: "1em" }}>
                                <Link className="card__link" to="pre">Lets gooooo</Link>
                            </p>
                        </div>


                    </div>

                    <div className="card card-4" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                        <div className="card__icn" >

                            <img src={hum} alt="" style={{ width: "150px", height: "150px" }} />
                        </div>
                        <div>
                            <h2 >Hum IT!</h2>
                            <h4 style={{ marginTop: "1em", fontWeight: "normal" }}>Find out if ‘na who sabi sing dey hum’ is true, or if it is the other way round.
                            </h4>

                            <p className="card__apply" style={{ marginTop: "1em" }}>
                                <Link className="card__link" to="coming-soon">Coming Soon</Link>
                            </p>
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Home