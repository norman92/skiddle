import React, { useState, useEffect } from "react";
import { SkiddleArtist } from "../../types/SkiddleArtist";
import { useParams } from "react-router-dom";
import { getArtist } from "../api";

function Artists() {
  const { id } = useParams();
  const [artist, setArtist] = useState<SkiddleArtist | null>(null);
  useEffect(() => {
    async function loadArtist() {
      const result = await getArtist(id);
      setArtist(result);
    }
    loadArtist();
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
