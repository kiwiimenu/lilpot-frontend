import "./menus.css"
import masterbg from '../assets/masterbackground.png';
import RestaurantFood from '../assets/restaurantfood.png'
import RestaurantPot from '../assets/restaurantpot.png'
import {AiOutlineArrowRight} from "react-icons/ai";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config.js";


function Restaurant() {
    
    const [textEn, setTextEn] = useState("");
    const docReference = doc(db, "text", "restauranttextcn");

    useEffect(() => {
        const getText = async () => {
          const textData = await getDoc(docReference);
          setTextEn(textData.data().text);
        };
        getText();
      }, []);
    return (
        <div  className="background-wrapper" style={{backgroundImage:`url(${masterbg})`}}>
            <div className="image-container">
                <img src={RestaurantFood} alt='' className="image-food"></img>
            </div>
            <div className="title-container">
                <div>Restaurant</div>
                <div className="arrow-container">
                    <AiOutlineArrowRight className="arrow"></AiOutlineArrowRight>
                </div>
            </div>
            <div className="body-container">
                <div className="body-text">{textEn}</div>
                <div className="img-container">
                    <img src={RestaurantPot} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;