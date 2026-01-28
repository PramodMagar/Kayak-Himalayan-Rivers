import React, { useState } from "react-dom";
import { packingData } from "./Packing"
import "./index.css";

export default function PackList(){
    return(
        <div className="packing-container">
                <h2 style={{ textAlign: 'center'}}>Packlist</h2>
        {
            packingData.map((section) => (
                <div key={section.id} 
                className="category-card">
                    <h3>{section.title}</h3>

                    <ul className="equipment-list">
                        {
                             section.equipment.map((item, index) => (
                                    <li key={index} 
                                    className="equipment-item">
                                        {item}
                                    </li>
                             ))}
                    </ul>
                </div>
            ))}            
        </div>
    );
}