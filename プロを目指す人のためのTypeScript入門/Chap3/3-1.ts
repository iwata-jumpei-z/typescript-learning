const name = "TEST";
const propName = "test"
const obj = {
  name,               // プロパティ名と変数名が同じ場合は省略記法が使える（非推奨なのか？）
  age: 20,
  "area": "Tokyo",
  1: "one",           // 数字もプロパティ名にできる（文字列リテラルと同じ扱い）
  [propName]: 'props' // 変数を動的にプロパティ名として使うこともできる
}
console.log(obj.name);    // "TEST"
console.log(obj["area"]); // "Tokyo"
console.log(obj[1]);      // "one"

const figure = 1
const messages = {
  good: "0以上の数値！",
  bad: "0未満の数値！",
}
// 式を使用してオブジェクトの呼び出しをすることができる
console.log(messages[figure >= 0 ? "good" : "bad"]);  // "0以上の数値！"

// オブジェクトのコピー
const obj2 = {
  newName: "TEST2",
  ...obj,             // スプレッド構文を使ってオブジェクトをコピー
}

// オブジェクトの等価性（===での判定）
// 同一オブジェクトの場合のみ等価であると判断される（つまり同じ参照を持っている場合のみ等価）