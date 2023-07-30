import IHeap from './heap/interfaceHeap';
import MaxHeap from './heap/maxHeap';
import MinHeap from './heap/minHeap';
import ITrie from './trie/interfaceTrie';
import Trie from './trie/trie';

const runHeap = () => {
  const minHeap: IHeap<number> = new MinHeap();
  minHeap.push(5);
  minHeap.push(6);
  minHeap.push(3);
  minHeap.push(4);

  console.log('This is min heap');
  console.log(minHeap.top());
  console.log(minHeap.size());
  minHeap.pop();
  console.log(minHeap.size());
  console.log(minHeap.top());

  const maxHeap: IHeap<number> = new MaxHeap();
  maxHeap.push(5);
  maxHeap.push(7);
  maxHeap.push(3);
  maxHeap.push(6);

  console.log('This is max heap');
  console.log(maxHeap.top());
  console.log(maxHeap.size());
  maxHeap.pop();
  console.log(maxHeap.size());
  console.log(maxHeap.top());
};

const runTrie = () => {
  const trie: ITrie = new Trie();

  trie.insert('hello');
  trie.insert('world');
  console.log(trie.search('world'));
  console.log(trie.startsWith('hell'));
  console.log(trie.search('hell'));
  console.log(trie.startsWith('bab'));
  console.log(trie.search('hellobab'));
  console.log(trie.startsWith('hellobab'));
};

// runHeap();
runTrie();
