/**
 * プリミティブ
 * ・数値型（number型）：整数や小数を一緒くたにして扱う型。浮動小数点を表現するため、少数の計算等で誤差が出る場面もある
 */
const _ = null

// 数値リテラル（number型とは違い、その数値だけのみ許可）
const big = 1e5        // 10の5乗
const small = 1e-5     // 10のマイナス5乗
const big2 = 1_000_000 // アンダースコアで区切りが可能

// 任意精度整数（BigInt）
// number型の数値との演算は不可能
let bigint_number = 123n

// バックスラッシュでエスケープ
console.log("print backslash: \\ \n Thank you.")

// Number, Boolean, String関数を用いて型変換をすることができる
