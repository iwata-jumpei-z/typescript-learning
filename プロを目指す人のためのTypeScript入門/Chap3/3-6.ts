// 分割代入
// ・型定義は元々のオブジェクトや配列のものが使用され、定義し直すことはできない（明示的な型注釈を入れれない）
// ・デフォルト値はundefinedに対してのみ適用される（nullには非適用）
const obj = {
  name: "TEST",
  age: 20,
  area: "Tokyo",
}
const array = [1, 2, 3, 4, 5];
// オブジェクトの分割代入
// const { name, age, area } = obj; 
const { name: newName, age: newAge, area: newArea } = obj; // 名前付き代入（プロパティ:変数名）
console.log(newName);   // "TEST"

// 配列の分割代入
const [first, second, , fourth] = array;  // 配列の要素を変数に代入（飛ばすこともできるよ）

// デフォルト値
const { name: defaultName = "DEFAULT", age: defaultAge = 0, area: defaultArea = "Unknown" } = obj;

// restパターン（残りを全て受け取る）
// 余計なプロパティを除いたコピーを作成する場合などに使用される
const { name: restName, ...restObj } = obj;
// for-inループでオブジェクトのキーを取得できる
for(const key in restObj) console.log(key)  // "age", "area"
