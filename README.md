# recurl
Created with CodeSandbox


轻量高效的 immutable 状态管理工具(for react), 灵感来源于 recoil ~

### 与其他状态管理工具对比

|        |  redux  | recoil | mobox   | hox
|  ----  | ----    |----     |----     |----     |
| 相较    | recurl 相对有更低的心智负担、更少的样本代码  |   recurl 相对有更简单的上手成本、并支持时间旅行  |  recurl 管理状态 immutable, 贴近 react 哲学   | recurl 摒弃了副作用处理, 同时无需配置即可避免不需要的 render  |



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
