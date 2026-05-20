import React from "react";
import styling from "./Card.module.css"

export const Card2 = () => {
    const imgUrl = "https://sqi.edu.ng/wp-content/uploads/2025/11/SQI4348-convocation-400x250.jpg";

    return(
        <div>
            <div className={styling.eachCard}>
                <img className={styling.cardimg} src={imgUrl} alt="SQI College of ICT First Convocation" />
                <div>
                    <h3>SQI College of ICT Holds First Convocation, Honours Pioneer Graduates</h3>
                    <h5>Nov 22, 2025</h5>
                    <p>SQI College of ICT, Ogbomoso, marked a landmark achievement on Saturday, 22nd November 2025, as the institution held its maiden Convocation Ceremony at its main campus along Old Ilorin Road, Ogbomoso. The event, which drew dignitaries from across Nigeria's academic...</p>
                </div>
            </div>
        </div>
    )
}