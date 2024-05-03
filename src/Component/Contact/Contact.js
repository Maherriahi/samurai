import "./Contact.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavVar } from "../redux/redux-slice";
function Contact() {
    const dispatsh = useDispatch()
    const state = useSelector(state => state.Nav)
    useEffect(() => {
        dispatsh(NavVar(true))
        console.log("Services etat nav", state.Nav)
    }, [])

    
    return (
        <div className="Contact-page">
            <div style={{ display: (state.Nav ? "block" : "none") }}>
                <Navbar />
            </div>
            <div className="Contact">
                <div className="box-cont">
                    <div className="box-tel contbox">
                        <div className="logo-contact">
                            <BsFillTelephoneFill />
                        </div>
                        <div className="info-contact">
                            <span>tel : +2536987411</span>
                        </div>
                    </div>
                    <div className="box-msg contbox">
                        <div className="logo-contact">
                            <SlEnvolopeLetter />
                        </div>
                        <div className="info-contact">
                            <span>samurai@tn</span>
                        </div>
                    </div>
                    <div className="box-local contbox">
                        <div className="logo-contact">
                            <FiMapPin />
                        </div>
                        <div className="info-contact">
                            <span>local</span>
                        </div>
                    </div>
                    <div className="box-fax contbox">
                        <div className="logo-contact">
                            <FaFax />
                        </div>
                        <div className="info-contact">
                            <span>fax : 586427891</span>
                        </div>
                    </div>
                </div>
                <div className="interface-cont">
                    <div className="inter-cont">
                        <h3>Contact us</h3>
                        <input type="text" placeholder="Enter your Name.." />
                        <input type="text" placeholder="Enter a valid email adress .." />
                        <textarea placeholder="Enter your message..." />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;