type Animal = {
  species: string;
  age: string;
}
type Human = {
  name: string;
  age: number
}

/**
 * ユニオン型：AまたはB
 */
type User = Animal | Human;  
const user1: User = {
  name: "human",
  age: 5
}

// プロパティアクセスについて、2種類のない
// ・型がない 　→ コンパイルエラーとなる
// ・実際にない → undefinedが返ってくる（オプショナルプロパティなど）

/**
 * 関数のユニオン型
 * ・このケースの場合、返り値はユニオン型となる
 * ・ユニオンの先頭に「|」を入れても同じ意味
 */
type unionFunc = 
  | ((str: string) => number)
  | ((str: string) => string);

/**
 * インターセクション型：AかつB
 */
type User2 = Animal & Human;
const user2: User2 = {
  species: "dog",
  name: "human",
  age: 5,    // string かつ number はnever型となる
}

/**
 * オプショナルプロパティの2種類の表し方（意味は同じではない）
 */
type TestProp = {
  prop1?: string;  // 変数定義時に、このプロパティを書いても書かなくても良い
  prop2: string | undefined;  // このプロパティを使う使わないに関係なく、明示的に書く必要がある（こちらの方が保守性高いよね）
}
const propValue: TestProp = {
  prop1: "test",
  prop2: undefined,  // ここは必ず書く必要がある
}
console.log(propValue.prop1?.split(""));  // オプショナルチェイニング（undefinedの時はundefinedが返り、その後のオプショナルチェインは飛ばされる → ランタイムエラーにならない）

