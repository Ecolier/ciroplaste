import { useContext } from "react";
import DrawerContext from "../drawer/drawer-context";
import HeaderButton from "./header-button";

type DrawerButtonProps = {
  className?: string;
};

function DrawerButton({ className }: DrawerButtonProps) {
  const { isActive, toggle } = useContext(DrawerContext);
  return (
    <HeaderButton className={className} onClick={() => toggle()}>
      <span className="material-symbols-rounded">
        {isActive ? <>menu_open</> : <>menu</>}
      </span>
    </HeaderButton>
  );
}

export default DrawerButton;
