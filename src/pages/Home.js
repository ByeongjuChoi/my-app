import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/expensive.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
                <h1>
                    Kawaiinu House
                </h1>
                <p>Taste the Finest Pizza</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home