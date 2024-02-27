import { memo } from "react";
import { Handle, Position, NodeResizeControl } from "reactflow";

const controlStyle = {
  background: "transparent",
  border: "true",
};

const CustomNode = ({ data }) => {
  return (
    <>
      <NodeResizeControl
        style={controlStyle}
        minWidth={200}
        minHeight={200}
        keepAspectRatio
      >
        <ResizeIcon />
      </NodeResizeControl>

      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "absolute", right: 5, bottom: 5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}

export default memo(CustomNode);
