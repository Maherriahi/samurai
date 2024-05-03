import React, { useEffect } from 'react'
import './Containt.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Services from "../services/Services";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Cards from '../Cards';
import { useDispatch, useSelector } from 'react-redux';
import { NavVar } from '../redux/redux-slice';
function Containt() {
    const dispatsh=useDispatch()
    const state = useSelector(state => state.Nav)
     
    useEffect(()=>{
      dispatsh(NavVar(false))
      console.log("About etat nav", state.Nav)
    },[])
    return (
        <div className="Containt-page">
            <Navbar />
            <div className="Containt">
                <div className="sideContaint">
                    <div id="desContaint">
                        <h1>SUMURAI</h1>
                        <h2>All power you found here ...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptates. A
                            d nostrum officiis inventore enim deleniti aliquid nemo eveniet possimus
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptates. A
                            d nostrum officiis inventore enim deleniti aliquid nemo eveniet possimus
                            t amet, consectetur adipisicing elit. Doloremque, voluptates. A
                            d nostrum officiis inventore enim deleniti aliquid nemo eveniet possimus</p>
                        <button id="btn-Containt">Read more</button>
                    </div>
                </div>
                <About />
                <div className="profile-cards">
                    <div className="profile">
                        <img src="images/sumb.webp" />
                    </div>
                    <div className="Cards-flex">
                        <Cards url="images\boxing.jpg" name="boxing" />
                        <Cards url="images\sport-man.jpg" name="Musculation"/>
                        <Cards url="images\karaté.jpg" name="karaté"/>
                        <Cards url="images\gymnastique.jpg" name="Gymnastique"/>
                        <Cards url="images\fitness.jpg" name="fitness"/>
                    </div>
                </div>
            </div>
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}




export default  Containt