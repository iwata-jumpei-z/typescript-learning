/**
 * object型：オブジェクトのみを受け付ける型。オブジェクトのプロパティ呼び出しはコンパイルエラー
 * never型：決して値を持たない型。常にエラーを投げる関数の戻り値などに使用する。全ての型はこれの部分型になる。
 */

/**
 * ユーザー定義型ガード：型述語により自作の型ガードを定義できる（管理は自己責任である点がネック）
 * ・引数名 is 型：returnで返されるものが判定
 * ・asserts 引数名 is 型：処理が正常に完了すればOK判定
 */
function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

/**
 * タプル型の拡張
 * ・スプレッド演算子を使用して拡張できる
 */
type NSN = [number, string, number];
type NSN2 = [string, ...NSN, string];

/**
 * mapped types（[P in K]: T）
 * ・PはKを順番に取り出した要素
 * ・Kはユニオン型。keyof somethingObjとかをここに入れる？
 * ・Tは取り出したそれぞれの値の型
 */
type Fruit = | "apple" | "banana" | "orange";
type FruitNumbers = {
  [P in Fruit]: number;
}
const fruitNumbers: FruitNumbers = {
  apple: 10,
  banana: 20,
  orange: 30,
}

/**
 * conditional types（T extends U ? X : Y）
 * ・TがUの部分型であればXそうでなければY
 * ・三項演算子的なノリ
 */
type ConditionalType<T> = T extends string ? string[] : number[];
const ConditionalArray: ConditionalType<string> = ["Hello", "World"]; // string[]型

/**
 * 組み込み関数（色々あるよ）
 * ・全オプショナルや全必須
 * ・プロパティの抽出や限定
 */
type readonlyPerson = Readonly<{
  name: string;
  age: number
}>