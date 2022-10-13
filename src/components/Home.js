import React, { useState } from "react";
import NameContext from "../context/NameContext";
import ShowName from "./showName/index";
import DefineName from "./defineName/index";

function Home() {
  const [name, setName] = useState(null),
    userData = {
      name: [name, setName],
    };

  return (
    <div>
      <h1>UseContext</h1>
      <div>
        <NameContext.Provider value={userData}>
          <ShowName />
          <DefineName />
        </NameContext.Provider>
      </div>
    </div>
  );
}

export default Home;
