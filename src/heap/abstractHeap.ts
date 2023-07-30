import IHeap from './interfaceHeap';

export default abstract class AbstractHeap<T> implements IHeap<T> {
  protected arr: Array<T>;

  constructor() {
    this.arr = new Array<T>();
  }

  protected abstract heapify: (size: number, index: number) => void;

  push = (element: T) => {
    this.arr.push(element);

    const n = this.size();

    for (let i = Math.ceil(n / 2 - 1); i >= 0; i--) {
      this.heapify(n, i);
    }
  };

  pop = () => {
    let n = this.size();

    if (n == 0) {
      return;
    }

    if (n == 1) {
      this.arr.shift();
      return;
    }

    const temp = this.arr[0];
    this.arr[0] = this.arr[n - 1];
    this.arr[n - 1] = temp;

    this.arr.pop();
    n = this.size();

    for (let i = Math.ceil(n / 2 - 1); i >= 0; i--) {
      this.heapify(n, i);
    }
  };

  top = (): T => {
    return this.arr?.[0];
  };

  size = (): number => {
    return this.arr.length;
  };
}
