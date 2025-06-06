/**
 * ジェネリクス（型引数）
 */
function myselfFunc<T>(arg1: T, arg2: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < arg2; i++) {
    result.push(arg1);
  }
  return result;
}
// アロー関数の場合はこんな感じ
const myselfArrowFunc = <T>(arg1: T, arg2: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < arg2; i++) {
    result.push(arg1);
  }
  return result;
};

// Typeで型定義をすることもできる
type MyselfFunc = <T>(arg1: T, arg2: number) => T[];

// 型引数に対して、拡張の構文も使える
type MyFuncExtends = <T extends { name: string }>(arg: number) => T[];
