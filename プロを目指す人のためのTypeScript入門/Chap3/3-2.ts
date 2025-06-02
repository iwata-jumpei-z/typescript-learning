/**
 * オブジェクトに与える型注釈
 * ・プロパティの不足と余剰の検出
 * ・不正な代入値の検出
 * ・存在しないプロパティへのアクセスの検出
 */ 
const _obj: {
  jp: string;
  en: string;
} = {
  jp: "日本",
  en: "English",
}

// typeを用いた型の別名定義
// interfaceでも同様の定義が可能だが、オブジェクト型でしか定義できない（typeではプリミティブでも定義できる）
type ObjType = {
  jp: string;
  en: string;
  nk?: string;            // オプショナルプロパティ（存在しない可能性があるプロパティ） 
  readonly money: string; // 読み取り専用プロパティ（値の変更ができないプロパティ）
  [key: string]: string;  // インデックスシグネチャを使用して、動的な任意のプロパティを許可（型安全性を壊しかねないので注意）
}

// typeof演算子を用いて型を取得する
console.log(typeof _obj); 