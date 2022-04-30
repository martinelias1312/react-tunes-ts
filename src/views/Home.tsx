import React, { useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const [title, setTitle] = useState("React, whee!!");

  return (
    <div className="home">
      <h1 onClick={() => setTitle("React, whee!!" + "!")}>{title}</h1>
      <p>sweet arrow func</p>
    </div>
  );
};

export default Home;
