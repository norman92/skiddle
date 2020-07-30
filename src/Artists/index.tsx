import React, { useState, useEffect } from "react";
import axios from "axios";
import { SkiddleArtist } from "../../types/SkiddleArtist";
import SkiddleResponse from "../../types/SkiddleResponse";
import { useParams } from "react-router-dom";

function Artists() {
  const { id } = useParams();
  const [artist, setArtist] = useState<SkiddleArtist | null>(null);
  useEffect(() => {
    async function getArtist() {
      const { data } = await axios.get<SkiddleResponse<SkiddleArtist>>(
        `http://localhost/oejfpowejfwe`
        //`https://www.skiddle.com/api/v1/artist/${id}?api_key=008f1e6099ecc48e990e3776784d447b`
      );
      setArtist(data.results);
    }
    getArtist();
  }, [id]);
  if (artist) {
    return (
      <div>
        <h1>{artist.name}</h1>
        <img src={artist.imageurl} alt={artist.name} />
        <p dangerouslySetInnerHTML={{ __html: artist.description}} />
      </div>
    );
  }
  return <p>Loading</p>;
}

export default Artists;
