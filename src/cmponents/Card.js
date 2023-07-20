import React from "react";

export default function Card(props)
{
    return(
        <div className="card">
            <img src={process.env.PUBLIC_URL+"/images/"+props.item.image} alt={props.id} className="card-image"/>
            <div>
                <img src={process.env.PUBLIC_URL+"./images/icons8-location-48.png"} alt={props.id} className="point"/>
                <h2 className="location">{props.item.location}</h2>
                <a href={props.item.google_maps}>View On Google Maps</a>
                <h1 className="title">{props.item.title}</h1>
                <h3 className="date">{props.item.start_date} - {props.item.end_date}</h3>
                <h3 className="desc">{props.item.description}</h3>
            </div>
        </div>
    )
}