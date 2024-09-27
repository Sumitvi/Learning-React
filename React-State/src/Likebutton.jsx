import { useState } from "react"
import "./Likebutton.css"

export default function () {


    let [isLiked, setisLiked] = useState(false);

    let toggleisLiked = () => {
        setisLiked(!isLiked);
    }
    return (
        <div className="Likebutton">

            <p onClick={toggleisLiked}>

                {

                    isLiked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart fillheart"></i>)
                }


            </p>
        </div>
    )
}