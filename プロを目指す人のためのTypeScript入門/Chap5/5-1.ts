/**
 * クラスの定義
 * 型引数を使用可能
 */
class User<T> {
  static method:  string = "static"   // 静的プロパティの定義（クラス全体で共有される）

  name: T;                      // プロパティの定義
  age: number;
  optional?: string;                 // オプショナルプロパティの定義
  onlyrRead: string = "read only";   // 読み取り専用プロパティの定義（constructorメソッド内でのみ書き込みできる）
  private secret: string = 'shy';    // プライベートプロパティの定義（クラス内でのみアクセス可能）
  // #secret: string = 'shy'          // プライベートプロパティの別の定義方法（こちらはJSでの機能）

  constructor(name: T, age: number) {  // インスタンス作成時に実行される初期化処理
    this.name = name;
    this.age = age;
  }
  // 上記のコンストラクタの省略記法（プロパティの定義も同時に可能）
  // constructor(public name: string, public age: number, private secret: string) {}

  isAdult(): boolean {               // メソッドの定義
    return this.age >= 18;
  }
  getSecret(): string {          // プライベートプロパティへのアクセスを提供するメソッド
    return `This is a secret: ${this.secret}`;
  }
}
/**
 * クラスのインスタンスの作成
 * new 式(引数)で式のクラスインスタンスを作成するという意味
 */
const user = new User<string>("John", 25);
console.log(User.method);  // 静的プロパティのアクセス（static）
