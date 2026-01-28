import React, { useState } from "react";
import { itineraryData } from "./Data";
import "./rivers.css";

export default function Rivers(){
    const [slectedDayIndex, setSlectedDayIndex] = useState(0);

    const currentDay = itineraryData[slectedDayIndex];

    // const handleTabClick = (e, index) => {
    //     e.preventDefault();
    //     setSlectedDayIndex(index);
    //     }
    
    return(
        <div className="rivers-container">
            <h1>Kayak Indien 2026</h1>
        <div className="nav-tabs">
            {itineraryData.map((day, index) => (
                <button  key={day.id} 
                className={`tab-button ${slectedDayIndex === index ? 'active' : ''}`} 
                onClick={() => setSlectedDayIndex(index)}
                > Tag {day.id}</button>
            ))}
        </div>

        <div className="content-card">
                <h2>{currentDay.title}</h2>
<br/>
                    {currentDay.verlauf ? 
                    ( currentDay.verlauf.map((item, idx) => 
                    (
                    <div key={idx} 
                    className="section-block">
                        <h3 
                        className="difficulty-header"
                        style={{color: 'red'}}
                        >
                            {item.section}
                        </h3>
                        <p className="activity-row">
                        <strong>Aktivität:</strong> {item.activity}
                        </p>

                        <div className="details-box">
                            {item.details}
                        </div>

                        <a className="map-link" 
                        href={item.mapUrl} target="_blank" rel="noreffer">
                            Google Map Link
                        </a>
                        <p style={{paddingBottom: '30px'}}></p>
                        </div>
                    
                ))
                ) : ( 
                    
                <div className="section-block">
                        
                <h3>{currentDay.activity}</h3>
                <p>{currentDay.details}</p>
                {currentDay.mapUrl && 
                (
                <a className="map-link" href={currentDay.mapUrl}
                target="_blank" rel="noreffer">
                    Google Map Link
                </a>
                    )} 
                    </div> 
                )}
            </div>
        </div>       
    );
}
