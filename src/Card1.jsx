import React from "react";
import styling from "./Card.module.css"

export const Card1 = () => {
    const imgLink = "https://sqi.edu.ng/wp-content/uploads/2026/02/IMG-20250712-WA0024-400x250.jpg";
    
    return(
        <div>
            <div className={styling.eachCard}>
                <img className={styling.cardimg} src={imgLink} alt="" />
                <div>
                    <h3>SQI College of ICT Partners with Ladoke Akintola University of Technology LAUTECH</h3>
                    <h5>Feb 13, 2026</h5>
                    <p>SQI College of ICT is pleased to formally announce a strategic academic collaboration with Ladoke Akintola University of Technology (LAUTECH) for the support and coordination of selected LAUTECH Part-Time Degree Programmes.This collaboration will operate at: SQI...</p>
                </div>
            </div>
        </div>
    )
}