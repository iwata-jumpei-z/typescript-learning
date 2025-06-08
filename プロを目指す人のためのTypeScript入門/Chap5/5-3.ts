type SampleUser = {
  name: string;
}
// クラスの型チェック
class SuperUser implements SampleUser {
  name: string;
  protected age: number;  // 子クラスからアクセスできるようにした

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };

  isAdult(): boolean {
    return this.age >= 18;
  }
}

class PremiumSuperUser extends SuperUser {  // SuperUserクラスを継承する
  #id: string

  constructor(name: string, age: number, id: string) {
    super(name, age);   // 親クラスのコンストラクタをオーバーライドするので、初期化処理を受け継がないといけない
    this.#id = id;
  }

  // メソッドのオーバーライドをする場合、返り値の型は一致していないといけない
  // override修飾子は付けなくても問題ないが、明示的に書くことによるコンパイルエラーの恩恵を受けることができる（tsconfigの設定で強制することも可能）
  public override isAdult(): boolean {
    return this.age >= 20;
  }
}


