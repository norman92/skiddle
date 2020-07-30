import React, { useState, useEffect } from "react";
import axios from "axios";
import SkiddleEvent from "../../types/SkiddleEvent";
import SkiddleResponse from "../../types/SkiddleResponse";
import Results from "./Results";
import Input from "./Input";

function Search() {
  const [events, setEvents] = useState<SkiddleEvent[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  useEffect(() => {
    async function getEvents() {
      const { data } = await axios.get<SkiddleResponse<SkiddleEvent[]>>(
        `https://www.skiddle.com/api/v1/events/search?keyword=${keyword}&api_key=008f1e6099ecc48e990e3776784d447b`
      );
      setEvents(data.results);
    }
    getEvents();
  }, [keyword]);
  return (
    <div>
      <Input
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setKeyword(e.currentTarget.value);
        }}
        value={keyword}
      />
      <Results events={events} />
    </div>
  );
}

export default Search;
