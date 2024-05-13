import { Root, createRoot } from "react-dom/client";
import Button from "../components/atoms/Button";
import { kintoneConfig } from "../utils/kintone";

const onClick = () => {
  alert(kintoneConfig.name);
  console.log(kintoneConfig.field);
};

kintone.events.on("app.record.index.show", (event) => {
  let root: Root | null = null;

  const rootElement = kintone.app.getHeaderMenuSpaceElement();
  if (rootElement) {
    rootElement.id = "header-id";
    root = createRoot(rootElement);
  }
  root?.render(<Button text="押してね!" type="ok" onClick={onClick} />);

  return event;
});
