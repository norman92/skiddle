import React, { useState, useEffect } from "react";
import axios from "axios";
import SkiddleEvent from "../../types/SkiddleEvent";
import SkiddleResponse from "../../types/SkiddleResponse";
import { useParams, Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [event, setEvent] = useState<SkiddleEvent | null>(null);
  useEffect(() => {
    async function getEvent() {
      const { data } = await axios.get<SkiddleResponse<SkiddleEvent>>(
        `https://www.skiddle.com/api/v1/events/${encodeURI(
          id
        )}?api_key=008f1e6099ecc48e990e3776784d447b`
      );
      setEvent(data.results);
    }
    getEvent();
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
