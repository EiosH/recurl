import { atom } from "../src";

const textState = atom("hello");

const numState = atom(0);

export { textState, numState };
