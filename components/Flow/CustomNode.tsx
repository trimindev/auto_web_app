import { memo, FC } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "reactflow/dist/style.css";

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <div className="border-black border-[1px] rounded-md py-2 px-10">
      <Handle type="target" position={Position.Top} />
      <div>{data.label} </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(CustomNode);
