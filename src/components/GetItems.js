import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config.js";
import { Carousel } from "react-bootstrap";
import masterbg from "../assets/masterbackground.png";
// import "react-toastify/dist/ReactToastify.css"
import "./getitems.css";

function GetItems() {
  const [postings, setPostings] = useState([]);
  const postingsCollectionRef = collection(db, "menu");
  // console.log(postingsCollectionRef)

  useEffect(() => {
    const getPostings = async () => {
      const data = await getDocs(postingsCollectionRef);
      setPostings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPostings();
  }, []);
  // console.log(postings)

  return (
    <div
      className="background-wrapper"
      style={{ backgroundImage: `url(${masterbg})` }}
    >
      <div className="posting-grid">
        {postings.map((postings) => {
          return (
            <div className="posting-container">
              {" "}
              <div style={{ width: 375 }}>
                <div className="item-name">{postings.itemName}</div>
                <div className="item-description">
                  {postings.itemDescription}
                </div>
                <div className="item-price">{postings.itemPrice}</div>
                <Carousel>
                  {postings.imageList.map((images) => {
                    return (
                      <Carousel.Item>
                        <img src={images} alt="" height="500" />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetItems;
