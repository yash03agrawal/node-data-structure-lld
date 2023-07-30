export default class TrieNode {
  private endOfWord: boolean;
  children: Array<TrieNode | null>;

  constructor() {
    this.endOfWord = false;
    this.children = new Array<TrieNode | null>();
    for (let i = 0; i < 256; i++) {
      this.children[i] = null;
    }
  }

  setEndOfWord = () => {
    this.endOfWord = true;
  };

  checkIfEndOfWord = () => {
    return this.endOfWord;
  };
}
