/**
 * lookup型：型情報の再利用
 * ・型情報を参照にすることで、再利用することができるようにする
 * ・ただし、パッと見で型が分からないことが弱点
 */
type SampleHuman = {
  name: string;
  age: number;
}
function setAge(human: Human, age: SampleHuman["age"]) {  // 型情報を参照
  return {
    ...human,
    age: age,
  }
}

/**
 * keyof型：キーの型をユニオン型で取得する
 * ・keyof *：型定義に対して、キーの型を取得する
 * ・keyof typeof *：ランタイム上での型を参照することになるので、実際のオブジェクトなどからキーを取得できる
 */
type Sample = keyof SampleHuman; // "name" | "age"

/**
 * keyofとlookupとジェネリクス
 */
const activeStatus = {
  active: "active",
  inactive: "inactive",
  pending: "pending",
}
const getStatus = (value: keyof typeof activeStatus) => {  // valueにはactiveStatusのキーのみ許す
  return activeStatus[value]
}