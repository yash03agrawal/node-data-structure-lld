import AbstractHeap from './abstractHeap';
import IHeap from './interfaceHeap';

export default class MaxHeap<T> extends AbstractHeap<T> implements IHeap<T> {
  protected heapify = (size: number, index: number): void => {
    let largest = index;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;

    if (leftChild < size && this.arr[largest] < this.arr[leftChild]) {
      largest = leftChild;
    }

    if (rightChild < size && this.arr[largest] < this.arr[rightChild]) {
      largest = rightChild;
    }

    if (largest != index) {
      let temp = this.arr[index];
      this.arr[index] = this.arr[largest];
      this.arr[largest] = temp;

      this.heapify(size, largest);
    }
  };
}
