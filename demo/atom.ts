import { atom } from "../src/recurl";

const textState = atom("hello");

const numState = atom(0);

export { textState, numState };
