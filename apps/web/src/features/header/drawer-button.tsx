import { useContext } from "react";
import IconButton from "../../components/icon-button";
import DrawerContext from "../drawer/drawer-context";

function DrawerButton() {
  const { toggle } = useContext(DrawerContext);
  return (
    <IconButton onClick={() => toggle()}>
      <span className="material-symbols-rounded">menu</span>
    </IconButton>
  );
}

export default DrawerButton;
