export default interface ITrie {
  insert: (word: string) => void;
  search: (word: string) => boolean;
  startsWith: (word: string) => boolean;
}
