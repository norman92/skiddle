import React from "react";
import SkiddleEvent from "../../types/SkiddleEvent";
import { Link } from "react-router-dom";
import './events.css';

interface Props {
  events: SkiddleEvent[];
}

function Results({ events }: Props) {
  return (
    <div className="results">
      {events.map((event) => (
        <div key={event.id} className="event">
          <img src={event.largeimageurl} alt={event.eventname} />
          <h2>{event.eventname}</h2>
          <p>{new Date(event.startdate).toLocaleDateString()}</p>
          <Link to={`details/${event.id}`}>view details</Link>
        </div>
      ))}
    </div>
  );
}

export default Results;
