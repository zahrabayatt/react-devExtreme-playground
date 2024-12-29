import { Popover } from "devextreme-react";
import React, { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  popoverContent?: ReactNode;
}

const HoverTagPopover = ({ id, title, popoverContent }: Props) => {
  return (
    <>
      <div id={`tag-${id}`} className="tag-text">
        {title}
      </div>
      <Popover
        target={`#tag-${id}`}
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        contentRender={() => <p>Popover content</p>}
      />
    </>
  );
};

export default HoverTagPopover;
