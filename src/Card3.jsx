import React from "react";
import styling  from "./Card.module.css";

export const Card3 = () => {
    const imageUrl = "https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg";
    const altText = "Matriculation ceremony at SQI College";
    
    return (
        <div>
            <div className={styling.eachCard}>
                <img className={styling.cardimg} src={imageUrl} alt={altText} />
                <div>
                    <h3>Students embrace new opportunities with matriculation at SQI College of ICT</h3>
                    <h5>May 5, 2025</h5>
                    <p>SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college's main auditorium, brought together dignitaries from the education sector, traditional rulers,...</p>
                </div>
            </div>
        </div>
    )
}