import React, { useState, useEffect } from "react";
import SkiddleEvent from "../../types/SkiddleEvent";
import Results from "./Results";
import Input from "./Input";
import { getEvents } from "../api";

function Search() {
  const [events, setEvents] = useState<SkiddleEvent[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  useEffect(() => {
    async function loadEvents() {
      const results = await getEvents(keyword);
      setEvents(results);
    }
    loadEvents();
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
