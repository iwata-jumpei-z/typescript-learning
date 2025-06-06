/**
 * 関数型の定義
 * ・記法はアロー関数に沿ったもの
 * ・引数名は任意で、コード内ドキュメントとして適切なものを設定しておくのが吉（関数を呼び出す際には任意の命名が可能）
 */
type sampleFunction = (x: number, y: number) => number;
const sampleFunc: sampleFunction = (x, y) => {
  return x + y;
}

// コールシグネチャ：プロパティと関数を合わせ持つオブジェクト
type myFunc = {
  isUsed?: boolean,
  (x: number): number
}
// コールシグネチャはあくまで関数
const myFunc: myFunc = (x) => {
  return x * 2;
}
 // プロパティも持てる
myFunc.isUsed = true;