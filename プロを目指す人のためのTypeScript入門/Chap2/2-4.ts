// 単項演算子
const int1 = 10;
const int2 = '20';
let int3 = 30;
console.log(-int1);          // -10
console.log(typeof +int2);   // 20（number型に変換されている）
console.log(++int3);         // 31（前置インクリメント）
console.log(int3--);         // 31（後置インクリメント）
console.log(int3);           // 30

// NaN（Not a Number）
// NaNは演算子に作用させると常にfalseを返す（NaN === NaNもfalse）

// 一般形と短絡評価
// 短絡評価：論理演算子の左辺が結果を決定する場合に右辺を評価しないこと
const a = '';
const b = 10;
console.log(a && b)   // 一番初めのfalsyな値を返す（返り値はa）
console.log(a || b)   // 一番初めのtruthyな値を返す（返り値はb）
console.log(a ?? b)   // 左辺が nullish なら右辺を返す（返り値はa）
let c = 20
c ||= 40              // cがtruthyならcを返す（cは20なので変化なし）
c &&= 50              // cがtruthyなら50を返す（cに50を代入）
c ??= 60              // cがnullishなら60を返す（cは50なので変化なし）
