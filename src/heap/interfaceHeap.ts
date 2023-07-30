export type T = number | string;

export default interface IHeap<T> {
  push: (element: T) => void;
  pop: () => void;
  top: () => T;
  size: () => number;
}
