// エラーオブジェクトとthrow文
function throwError() {
  const error = new Error('エラーが発生しました');  // エラーオブジェクトのインスタンスを作成
  throw error;                                  // エラーを投げる
}

/**
 * 例外処理：ランタイムエラーの際のクラッシュを防ぐ処理
 * ・エラーをコードの修正で回避できる場合には、例外処理を使用するのではなくロジックを修正することが望ましい
 * ・finallyブロックは。エラーの脱出前に実行される（つまりエラーを投げる前）
 */
try {
  console.log('今からエラーを投げるぜ');
  throwError();
} catch (error) {
  console.log('エラーが発生したぜ');
} finally {
  console.log("脱出前に足掻くぜ")
}
