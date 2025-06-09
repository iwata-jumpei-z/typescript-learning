/**
 * リテラル型
 */
const str: "Hello" = "Hello"; // 文字列リテラル型
const num: 42 = 42; // 数値リテラル型
const bool: true = true; // 真偽値リテラル型
const option: "Yes" | "No" = "Yes"; // ユニオン型のリテラル型

/**
 * テンプレートリテラル型
 * 返り値がテンプレートリテラルのフォーマットに合っていればOK
 */
type Greeting = `Hello, ${string}`;

/**
 * リテラル型のWidening
 * ・場面に応じて、型が広がることがある（特に関数やオブジェクト使用時に効果を発揮する）
 * ・詳細な挙動を把握する必要はない気がする
 */
const test1Str = "Hello"; // リテラル型
let test2Str = "Hello";   // string型に広がる