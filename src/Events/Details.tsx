import React, { useState, useEffect } from "react";
import SkiddleEvent from "../../types/SkiddleEvent";
import { useParams, Link } from "react-router-dom";
import { getEvent } from "../api";

function Details() {
  const { id } = useParams();
  const [event, setEvent] = useState<SkiddleEvent | null>(null);
  useEffect(() => {
    async function loadEvent() {
      const results = await getEvent(id);
      setEvent(results);
    }
    loadEvent();
  }, [id]);
  if (event) {
    return (
      <div>
        <h1>{event.eventname}</h1>
        <img src={event.largeimageurl} alt={event.eventname} />
        <p>{new Date(event.startdate).toLocaleDateString()}</p>
        <p dangerouslySetInnerHTML={{ __html: event.description }} />
        <p>{event.entryprice}</p>
        <div className="artists">
          <h2>Artists</h2>
          {event.artists.length ? (
            event.artists.map((artist) => (
              <Link to={`/artist/${artist.artistid}`} key={artist.artistid}>
                <p>{artist.name}</p>
                <img src={artist.image} alt={artist.name} />
              </Link>
            ))
          ) : (
            <p>No artists found.</p>
          )}
        </div>
        <div className="location">
          <h2>Venue</h2>
          <p>{event.venue.name}</p>
          <p>{event.venue.phone}</p>
          <p>
            {event.venue.address}
            <br />
            {event.venue.town}
            <br />
            {event.venue.cityname}
            <br />
            {event.venue.postcode}
            <br />
          </p>
        </div>
      </div>
    );
  }
  return <p>Loading</p>;
}

export default Details;
