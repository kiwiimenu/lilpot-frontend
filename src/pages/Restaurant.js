import "./menus.css"
import masterbg from '../assets/masterbackground.png';
import RestaurantFood from '../assets/restaurantfood.png'

function Restaurant() {
    return (
        <div  className="big" style={{backgroundImage:`url(${masterbg})`}}>
            <div className="image-container">
                <img src={RestaurantFood} alt='' className="image-food"></img>
            </div>
            <div className="title-container">
                <div>Restaurant</div>
            </div>
        </div>
    )
}

export default Restaurant;