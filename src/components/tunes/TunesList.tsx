import React, { useState } from "react";

// props
type Props = {};

// component
const TunesList = (props: Props) => {
  // state
  const [songs, setSongs] = useState([
    { id: 1, artist: "Jozo", name: "Skvela songa" },
    { id: 2, artist: "Samo", name: "Samov song" },
    { id: 3, artist: "Dezo", name: "Dezo piesen" },
  ]);

  // template
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{JSON.stringify(song)}</li>
      ))}
    </ul>
  );
};

export default TunesList;
