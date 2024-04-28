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
  console.log(form);
  return form.properties.filter((v: { type: fieldCodes }) =>
    fields.includes(v.type)
  ) as [];
};
