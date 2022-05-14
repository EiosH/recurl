import { useEffect, useState } from "react";

class Atom<T> {
  private listeners: Set<(value: T) => void>;
  private value: T;
  default: T;

  constructor(data: T) {
    this.default = data;
    this.value = data;
    this.listeners = new Set();
  }

  update(value: T) {
    this.value = value;
    this.emit();
  }

  get(): T {
    return this.value;
  }

  emit() {
    this.listeners.forEach((listener) => {
      listener(this.get());
    });
  }

  subscribe(callback: (value: T) => void): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }
}

function useRecurlState<T>(atom: Atom<T>): [T, (value: T) => void, () => void] {
  const [, setState] = useState<Symbol>();

  const reRender = () => {
    setState(Symbol(undefined));
  };

  useEffect(() => {
    return atom.subscribe(reRender);
  }, [atom]);

  const value = atom.get();
  const setValue = (data: T) => {
    atom.update(data);
  };
  const reset = () => {
    atom.update(atom.default);
  };

  return [value, setValue, reset];
}

const atom = <T extends {}>(defaultValue: T) => {
  return new Atom<T>(defaultValue);
};

export { useRecurlState, atom };
