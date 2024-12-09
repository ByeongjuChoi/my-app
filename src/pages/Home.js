import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/expensive.jpg";
import "../styles/Home.css";

function Home() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch data when the component loads
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.0.248:8080/api/v1/feed/feedSelectAll', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorDetails = await response.json();
                    console.error('Error details:', errorDetails);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result); // Save the fetched data to state
                console.log('Response data:', result);
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this will run only once when the component mounts


    return (
        <div className="home" /* style={{backgroundImage: `url(${BannerImage})`}} */>
            <div className="headerContainer" /* style={{backgroundImage: `url(${BannerImage})`}}*/>
                <h1>
                    Kawaiinu House
                </h1>
                <p>Taste the Finest Pizza</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>

            {/* Display fetched data */}
            <div className="feedData">
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    data.map((item) => (
                        <div key={item.feedid}>
                            <p>{item.picture}</p>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default Home