import { FC, useEffect } from "react";
import {
  Dropdown as KucDropdown,
  DropdownProps,
  DropdownItem,
} from "kintone-ui-component";
import { fieldCodes as fieldCodesType } from "../../types/kintone";
import { getFormInfo } from "../../utils/kintone";
import { makeRandomString } from "../../utils/make";

type Props = DropdownProps & {
  fieldCode: fieldCodesType[];
  onChange?: (event?: Event) => void | undefined;
};

const DropdownWithFormInfo: FC<Props> = ({
  fieldCode,
  className = "",
  error = "",
  id = "",
  label = "",
  value = "",
  selectedIndex = 0,
  disabled = false,
  requiredIcon = false,
  visible = true,
  onChange = undefined,
}) => {
  const domId = makeRandomString();
  useEffect(() => {
    const createDropdown = async (fieldCodes: fieldCodesType[]) => {
      const i = [] as DropdownItem[];
      const f = await getFormInfo(fieldCodes);
      f.forEach((v: { label: string }) => {
        i.push({ label: v.label, value: v.label });
      });
      const dropdown = new KucDropdown({
        className: className,
        error: error,
        id: id,
        label: label,
        value: value,
        selectedIndex: selectedIndex,
        disabled: disabled,
        requiredIcon: requiredIcon,
        visible: visible,
        items: i,
      });
      if (onChange) {
        dropdown.addEventListener("change", (event: Event) => {
          onChange(event);
        });
      }
      const div = document.getElementById(domId);
      div?.appendChild(dropdown);
    };
    createDropdown(fieldCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={domId}></div>;
};

export default DropdownWithFormInfo;
