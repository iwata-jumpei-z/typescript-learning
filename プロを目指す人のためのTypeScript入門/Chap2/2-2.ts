// 型名の命名は、先頭を大文字で始めることが一般的

// 型注釈
const userName: string = "John Doe";  // 変数に与えた型と代入する値の型が一致していればOK
const userName2: string = 12;         // これはエラー

// letを用いて定義だけすることも可能
// 代入するまではundefinedとして扱われる
let userName3: string, userName4: string;
