import "./menus.css"
import masterbg from '../assets/masterbackground.png';
import RestaurantFood from '../assets/restaurantfood.png'
import RestaurantPot from '../assets/restaurantpot.png'
import {AiOutlineArrowRight} from "react-icons/ai";

function Restaurant() {
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
                <div className="body-text">Since established in early 2019, Lil Pot has been committed to bringing customers the highest quality meat, delicious and creative soup bases, fresh and healthy ingredients, as well as special seasonal new selections, serving simmered bone broth and freshly cut meat slices prepared on the day. All of our beef and lamb are proudly locally sourced in Ontario, with premium grass-fed black Angus beef and lamb shoulder. In addition to the regular menu, we also offer top-notch Japanese purebred Wagyu beef with a wide range of cuts available, including chuck eye, brisket, short rib, rib finger, etc. If that still cannot fully satisfy your taste buds, complimentary drinks and desserts are also included, creating a diverse, innovative, and ultimate dining experience</div>
                <div className="img-container">
                    <img src={RestaurantPot} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;