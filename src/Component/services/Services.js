import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Services.css";
import { useDispatch, useSelector } from "react-redux";
import { NavVar } from "../redux/redux-slice";
function Services() {
    const dispatsh = useDispatch()
    const state = useSelector(state => state.Nav)
    useEffect(() => {
        dispatsh(NavVar(true))
        console.log("Services etat nav", state.Nav)
    }, [])

    const [program, setProgrm] = useState('Fitness');
    return (

        <div className="Services">
            <div style={{ display: (state.Nav ? "block" : "none") }}>
                <Navbar />
            </div>
            <div className="Services-page">
                <div className="back-img">
                    <div className="info-services">
                        <h1>Samurai center</h1>
                        <h2>{program} program</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, culpa. Similique sapiente
                            iste ut quae Eaque, culpa. Similique sapiente iste ut quae.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                <div className="cards-services">
                    <div className="card-box" onClick={() => { setProgrm('Fitness') }}>
                        <div className="img">
                            <img src="images/fitness-logo.png" />
                        </div>
                        <div className="inf">
                            <p>fitness</p>
                        </div>
                    </div>
                    <div className="card-box" onClick={() => { setProgrm('Karaté') }}>
                        <div className="img">
                            <img src="images/karate-serv.png" />
                        </div>
                        <div className="inf">
                            <p>karaté</p>
                        </div>
                    </div>
                    <div className="card-box" onClick={() => { setProgrm('Boxing') }}>
                        <div className="img">
                            <img src="images/box.png" />
                        </div>
                        <div className="inf">
                            <p>boxing</p>
                        </div>
                    </div>
                    <div className="card-box" onClick={() => { setProgrm('Gymnastique') }}>
                        <div className="img">
                            <img src="images/jym-serv.png" />
                        </div>
                        <div className="inf">
                            <p>gymnastique</p>
                        </div>
                    </div>
                    <div className="card-box" onClick={() => { setProgrm('Musculation') }}>
                        <div className="img">
                            <img src="images/musc-serv.png" />
                        </div>
                        <div className="inf">
                            <p>musculation</p>
                        </div>
                    </div>
                    <div className="card-box img-serv" onClick={() => { setProgrm('Services') }}>
                        <div className="img">
                            <img src="images/serv-24.png" />
                        </div>
                        <div className="inf">
                            <p>open</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;