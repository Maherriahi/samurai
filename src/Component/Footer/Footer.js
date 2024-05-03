import {Component} from "react";
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <div className="Footer">
            <div className="icons-file">  
                <AiFillFacebook className="icons"/>
                <AiFillTwitterSquare className="icons"/>
                <AiFillInstagram className="icons"/>
                <AiFillYoutube className="icons"/>
                <p>2023 Copy-Right Samurai</p>        
            </div>
            
            </div>
        )
    }
}