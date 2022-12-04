import {useState, useEffect} from "react";
import Menu from "@mui/material/Menu";

export default function ContextMenu({
  triggerContent,
  menuItems,
  isClosed,
  ...props
}) {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = event => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    if (isClosed) {
      handleClose();
    }
  }, [isClosed]);

  return (
    <div onContextMenu={handleContextMenu} style={{cursor: "context-menu"}}>
      {triggerContent}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
            : undefined
        }
        {...props}
        className={`dark-mode ${props?.className}`}>
        {menuItems}
      </Menu>
    </div>
  );
}
