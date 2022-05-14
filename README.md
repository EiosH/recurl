# recurl
Created with CodeSandbox


轻量高效的 immutable 状态管理工具(for react), 灵感来源于 recoil ~

### how to use

```js
import { atom, useRecurlState } from "recurl";

const textState = atom("hello");

export default const CharacterCounter = () => {
  const [char, setChar, resetChar] = useRecurlState(textState);

  return (
    <div>
      <input
        type="text"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />
      <div
        onClick={resetChar}
      >
        reset
      </div>
    </div>
  );
};


```
