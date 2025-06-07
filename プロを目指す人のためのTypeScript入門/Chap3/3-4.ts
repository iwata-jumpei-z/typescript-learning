type Animal = {
  name: string;
  age: number;
}

type Human = {
  name: string;
  age: number;
  height: number;
  weight: number;
}

// 型引数
type Family<T> = {
  species: T;
}
const family: Family<Animal> = {
  species: {
    name: "Dog",
    age: 5
  }
}
// オプショナルな型引数（デフォルトの型を指定できる）
type OptionalFamily<T = Human> = {
  species: T;
}
// 部分型しか許可しない型引数
type PartialFamily<T extends Animal> = {
  species: T;
}