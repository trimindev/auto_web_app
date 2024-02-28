import { memo, FC } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "reactflow/dist/style.css";

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} />
      <div>{data.label} </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(CustomNode);
