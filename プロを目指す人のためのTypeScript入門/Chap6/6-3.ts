/**
 * 型の絞り込み
 * ・構文から型を特定できる場合に、自動的に絞り込んでくれる
 * ・ランタイム中では型名を使用できないので、何かしら判定用のプロパティなりを用意しないといけない
 * → SWITCH文は効果的に使用できる
 */
type Animal = {
  type: "animal"
  species: string
}
type Human = {
  type: "human"
  name: string
}
type User = Animal | Human;
function handleUser(user: User) {
  switch (user.type) {
    case "animal":
      return user.species;
    case "human":
      return user.name;
  }
}

/**
 * typeof演算子
 */
console.log(typeof "Hello"); // string
console.log(typeof 42);      // number
console.log(typeof {});      // object
console.log(typeof null);    // object ※ Nullは取扱注意