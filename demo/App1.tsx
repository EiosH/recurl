import React from "react";
import { useRecurlState } from "../src/recurl";

import { textState } from "./atom";

export const CharacterCounter = () => {
  const [char, setChar, reset] = useRecurlState(textState);

  return (
    <div>
      <input
        type="text"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />

      <div>Echo: {char}</div>
      <div
        onClick={() => {
          reset();
        }}
      >
        reset
      </div>
    </div>
  );
};

export default CharacterCounter;
