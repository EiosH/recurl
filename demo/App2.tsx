import React from "react";

import { useRecurlState } from "../src/recurl";

import { textState, numState } from "./atom";

export const CharacterCounter = () => {
  const [char] = useRecurlState(textState);
  const [num] = useRecurlState(numState);

  return (
    <div>
      <div>Echo: {char}</div>
      <div>Echo: {num}</div>
    </div>
  );
};

export default CharacterCounter;
