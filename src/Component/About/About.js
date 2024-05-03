import "./About.css"
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavVar } from "../redux/redux-slice";
function About() {

  
  const dispatsh = useDispatch()
  const state = useSelector(state => state.Nav)
  useEffect(() => {
      dispatsh(NavVar(true))
      console.log("Services etat nav", state.Nav)
  }, [])


  return (<div className="About">
    <div style={{ display: (state.Nav ? "block" : "none") }}>
      <Navbar />
    </div>
    <div className="about-page">
      <div className="back-abou">
        <div className="About-par">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            aliquam magnam consequuntur distinctio repellat autem est neque unde ipsum facilis ut amet numquam
            asperiores perspiciatis, eius ex praesentium ducimus perferendis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            aliquam magnam consequuntur distinctio repellat autem est neque unde ipsum facilis ut amet numquam
            asperiores perspiciatis, eius ex praesentium ducimus perferendis
          </p>
          <div className="icons-about">
            <BsFacebook className="face" /><AiOutlineTwitter className="twit" /><AiFillYoutube className="yout" />
          </div>
        </div>
      </div>
      <div className="About-img">
        <img src="images\back-about.jpg" />
      </div>
    </div>
  </div>)
}
export default About;