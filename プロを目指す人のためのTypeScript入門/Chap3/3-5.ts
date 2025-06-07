// 配列基礎
const array = [1, 2, 3, 4, 5];
console.log(array[0]);    // 1
console.log(array["0"])   // コンパイルエラー（配列のインデックスは数値である必要があるため）

// for-ofループ
// 内部的にはイテレータを使用しているみたい（ループ処理が早いらしい）
for (const item of array) {
  console.log(item);      // 1, 2, 3, 4, 5
}

// 配列型の記法（2種類ある）
const array2: number[] = [1, 2, 3, 4, 5];
// const array2: Array<number> = [1, 2, 3, 4, 5];

// 読み取り専用（2種類ある）
const array3: readonly number[] = [1, 2, 3, 4, 5];
// const array3: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// タプル
const tuple: [string, number] = ["test", 123];
type Tuple = readonly [name: string, age: number, lang?: string]  // ラベル付きタプル（ラベルは識別子として使用できない、ただのラベル）
const tuple2: Tuple = ["test", 123];                              // オプショナルな要素を持つタプル（最後の要素はオプション）
