import React, { useState } from "react";

// props
type Props = {};

// component
const TunesSearchForm = (props: Props) => {
  // state
  const [query, setQuery] = useState("");

  // submit form
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // input element
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* const newSong = {
      id: Math.max(...songs.map((s) => s.id)) + 1,
      artist: query,
      name: query,
    };

    setSongs([...songs, newSong]); */
  };

  // template
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInput} />
      </form>
    </div>
  );
};

export default TunesSearchForm;
