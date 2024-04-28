// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/dropdown
import { FC, useEffect } from "react";
import { Dropdown as KucDropdown, DropdownProps } from "kintone-ui-component";
import { makeRandomString } from "../../utils/make";

type Props = DropdownProps & {
  onChange?: (event?: Event) => void | undefined;
};

const Dropdown: FC<Props> = ({
  className = "",
  error = "",
  id = "",
  label = "",
  value = "",
  selectedIndex = 0,
  disabled = false,
  requiredIcon = false,
  visible = true,
  items = [],
  onChange = undefined,
}) => {
  const domId = makeRandomString();
  const createDropdown = () => {
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
      items: items,
    });
    if (onChange) {
      dropdown.addEventListener("change", (event: Event) => {
        onChange(event);
      });
    }
    const div = document.getElementById(domId);
    div?.appendChild(dropdown);
  };
  useEffect(() => {
    createDropdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={domId}></div>;
};

export default Dropdown;
