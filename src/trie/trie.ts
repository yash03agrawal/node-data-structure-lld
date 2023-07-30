import ITrie from './interfaceTrie';
import TrieNode from './trieNode';

export default class Trie implements ITrie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert = (word: string): void => {
    let curr: TrieNode | null = this.root;

    for (let c of word) {
      const index = c.charCodeAt(0);
      if (curr && !curr?.children?.[index]) {
        curr.children[index] = new TrieNode();
      }
      if (curr) {
        curr = curr.children[index];
      }
    }

    curr?.setEndOfWord();
  };

  search = (word: string): boolean => {
    let curr: TrieNode | null = this.root;

    for (let c of word) {
      const index = c.charCodeAt(0);
      if (curr && !curr?.children?.[index]) {
        return false;
      }
      if (curr) {
        curr = curr.children[index];
      }
    }

    return curr?.checkIfEndOfWord() || false;
  };

  startsWith = (word: string): boolean => {
    let curr: TrieNode | null = this.root;

    for (let c of word) {
      const index = c.charCodeAt(0);
      if (curr && !curr?.children?.[index]) {
        return false;
      }
      if (curr) {
        curr = curr.children[index];
      }
    }
    return true;
  };
}
