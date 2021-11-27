import React from "react";
import { Link } from "react-router-dom";

const LoadActam = () => {
    return (
        <>

            <div className="main-container">
                <div className="heading">
                    <h1 className="heading__title">Choose a category</h1>
                    <p className="heading__credits"></p>
                </div>
                <div className="cards">
                    <div className="card card-1">
                        <h2 className="card__title">Practice</h2>
                        <h4 className="car" >Make my enemies no see me finish</h4>

                        <p className="card__apply">
                            <Link className="card__link" to="act-am-practice">Play Now </Link>
                        </p>
                    </div>
                    <div className="card card-2">

                        <h2 className="card__title">War</h2>
                        <h4 className="car" >Who dae breathe!!!</h4>

                        <p className="card__apply">
                            <Link className="card__link" to="act-am-game">Play Now </Link>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoadActam