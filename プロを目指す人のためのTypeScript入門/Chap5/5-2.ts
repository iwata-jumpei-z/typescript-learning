/**
 * 型宣言と変数では異なる名前空間上で管理されるため、同名でも共存することができる
 * 使用方法が異なるため混同しない
 */
type Item = {
  name: string;
  price: number;
}
const Item: Item = {
  name: "Apple",
  price: 100
}

/**
 * クラス宣言は型定義も同時に行われる
 */
class TestUser {
  name: string;
  age: number;
}
const testUser: TestUser = new TestUser();

// クラスのインスタンスかどうかの確認
console.log(testUser instanceof TestUser);  // true

// クラスオブジェクトそのものの型
type UserConstructor = new () => TestUser;
