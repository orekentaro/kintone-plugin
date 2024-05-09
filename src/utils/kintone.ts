import { fieldCodes } from "../types/kintone";

export const getFormInfo = async (fields: fieldCodes[] = []) => {
  // 特定のフィールドコードのフォーム情報を取得
  const body = {
    app: kintone.app.getId(),
  };
  const form = await kintone.api(
    kintone.api.url("/k/v1/form.json", true),
    "GET",
    body
  );
  return form.properties.filter((v: { type: fieldCodes }) =>
    fields.includes(v.type)
  ) as {
    code: string;
    defaultValue: string;
    expression: string;
    hideExpression: boolean;
    label: string;
    maxLength: number;
    minLength: number;
    noLabel: boolean;
    required: boolean;
    type: fieldCodes;
    unique: boolean;
  }[];
};

export const backPage = () => {
  // 設定画面からプラグイン一覧へ戻る
  window.location.href = "../plugin/#/";
};
