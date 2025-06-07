/**
 * 関数定義（この定義の仕方では巻き上げがある）
 * 帰り値がない場合は、voidを指定する
 */
function add(x: number, y: number) :number {
  return x + y;
}

/**
 * 関数式による定義
 */
type Person = {
  name: string;
  age: number;
  height?: number;  // オプショナルプロパティ 
}
// オブジェクトの引数に対する分割代入（関数式に限った話ではない）
const introduce = function({name, age, height}: Person): string {
  return `My name is ${name} and I am ${age} years old and my height is ${height ?? 'XXX'} cm.`;
}

/**
 * アロー関数による定義
 */
const arrowIntroduce = ({name, age, height = 200}: Person): string => {
  return `My name is ${name} and I am ${age} years old and my height is ${height} cm.`;
}
// こちらでもOK（省略形）
// 単純に値をreturnするだけの関数にしか省略記法は使用できない
// const arrowIntroduce = ({name, age}: Person): string => `My name is ${name} and I am ${age} years old.`;

/**
 * メソッド記法
 */
const methods = {
  getName(name: string): string {
    return `My name is ${name}.`;
  },
  getAge: (age: number): number => age - 10   // アロー関数も使えるが、自身のthisを持たないことがネック
}

/**
 * 可変長引数とスプレッド構文
 */
const sampleArray = [1, 2, 3, 4, 5];
function sum(...rest: number[]): number {
  let sumValue = 0;
  for (const num of rest) {
    sumValue += num;
  }
  return sumValue;
}
console.log(sum(...sampleArray));

/**
 * コールバック関数：関数の引数として渡された関数
 * サンプルはめんどいので作らん
 */