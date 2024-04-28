export type canDisabledField =
  | kintone.fieldTypes.SingleLineText
  | kintone.fieldTypes.RichText
  | kintone.fieldTypes.MultiLineText
  | kintone.fieldTypes.Number
  | kintone.fieldTypes.Calc
  | kintone.fieldTypes.RadioButton
  | kintone.fieldTypes.DropDown
  | kintone.fieldTypes.Date
  | kintone.fieldTypes.Time
  | kintone.fieldTypes.DateTime
  | kintone.fieldTypes.Link
  | kintone.fieldTypes.CheckBox
  | kintone.fieldTypes.MultiSelect
  | kintone.fieldTypes.UserSelect
  | kintone.fieldTypes.OrganizationSelect
  | kintone.fieldTypes.GroupSelect
  | kintone.fieldTypes.File;

export type allField =
  | kintone.fieldTypes.Id
  | kintone.fieldTypes.Revision
  | kintone.fieldTypes.Modifier
  | kintone.fieldTypes.Creator
  | kintone.fieldTypes.RecordNumber
  | kintone.fieldTypes.UpdatedTime
  | kintone.fieldTypes.CreatedTime
  | canDisabledField;

export type fieldCodes =
  | "SINGLE_LINE_TEXT"
  | "RICH_TEXT"
  | "MULTI_LINE_TEXT"
  | "NUMBER"
  | "CALC"
  | "RADIO_BUTTON"
  | "DROP_DOWN"
  | "DATE"
  | "TIME"
  | "DATETIME"
  | "LINK"
  | "CHECK_BOX"
  | "MULTI_SELECT"
  | "USER_SELECT"
  | "ORGANIZATION_SELECT"
  | "GROUP_SELECT"
  | "FILE"
  | "__ID__"
  | "__REVISION__"
  | "MODIFIER"
  | "CREATOR"
  | "RECORD_NUMBER"
  | "UPDATED_TIME"
  | "CREATED_TIME"
  | "LABEL"
  | "SPACER"
  | "HR"
  | "GROUP";
