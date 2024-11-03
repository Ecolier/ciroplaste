import HeaderButton from "./header-button";
import useDrawer from "../drawer/drawer-context";

type DrawerButtonProps = {
  className?: string;
};

function DrawerButton({ className }: DrawerButtonProps) {
  const { isActive, toggle } = useDrawer();
  return (
    <HeaderButton className={className} onClick={() => toggle()}>
      <span className="material-symbols-rounded">
        {isActive ? <>menu_open</> : <>menu</>}
      </span>
    </HeaderButton>
  );
}

export default DrawerButton;
