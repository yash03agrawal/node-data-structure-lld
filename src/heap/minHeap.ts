import AbstractHeap from './abstractHeap';
import IHeap from './interfaceHeap';

export default class MinHeap<T> extends AbstractHeap<T> implements IHeap<T> {
  protected heapify = (size: number, index: number): void => {
    let smallest = index;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;

    if (leftChild < size && this.arr[smallest] > this.arr[leftChild]) {
      smallest = leftChild;
    }

    if (rightChild < size && this.arr[smallest] > this.arr[rightChild]) {
      smallest = rightChild;
    }

    if (smallest != index) {
      let temp = this.arr[index];
      this.arr[index] = this.arr[smallest];
      this.arr[smallest] = temp;

      this.heapify(size, smallest);
    }
  };
}
